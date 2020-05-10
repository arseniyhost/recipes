import React, { useState, useEffect } from 'react';
import style from './../AddRecipe/AddRecipe.module.css';
import { Redirect } from 'react-router-dom';
import { renderIngredients } from './../../common/utils/renderIngredients';
import { renderInstructions } from './../../common/utils/renderInstructions';
import ButtonBox from './../../common/utils/ButtonBox';
import { Form } from 'reactstrap';
import { connect } from 'react-redux'
import { Field, reduxForm, FieldArray } from 'redux-form'
import { load as loadAccount } from './../../store/reducers/loadReducer';
import { FieldInput, FieldTextarea, FieldSelect } from './../../common/utils/utils';
import { require, minValues } from './../../common/validates/validates';

const min = minValues(2);

let InitializeFromStateForm = props => {
    const { handleSubmit, load, pristine, reset, submitting, data } = props;

    let bigData = data;

    const btnBack = () => {
        window.location.reload();
    }

    useEffect(() => {
        if(bigData !== data) {
            bigData = data;
        }
    }, []);

    return (
        <Form className={style.formRecipe} onSubmit={handleSubmit}>
            <div className={style.generalBtn}>
                <button type="button" onClick={() => load(bigData)}>Загрузка данных</button>
                <button type="button" onClick={btnBack}>Назад</button>
            </div>
            <div className={style.recipeContainer}>
                <div>
                    <Field
                        name="title"
                        type="text"
                        component={FieldInput}
                        label="Название блюда:"
                        validate={[require, min]}
                    />
                </div>
            </div>
            <div className={style.describeInfo}>
                <div>
                    <Field
                        name="urlPhoto"
                        label="Главное фото:"
                        validate={[require, min]}
                        component={FieldInput}
                        type="text"
                        placeholder="Photo"
                    />
                </div>
                <div>
                    <Field label="Катергория:" name="category" validate={[require]} component={FieldSelect} />
                </div>
            </div>
            <div className={style.recipeContainer}>
                <div>
                    <Field
                        name="description"
                        type="textarea"
                        component={FieldTextarea}
                        label="Описание:"
                        validate={[require, min]}
                    />
                </div>
            </div>
            <div className={style.arrayIng}>
                <FieldArray name="Ingredients" component={renderIngredients} />
            </div>
            <div className={style.instructionsBox}>
                <FieldArray name="instructions" component={renderInstructions} />
            </div>
            <div className={style.recipeContainerBtn}>
                <ButtonBox
                    color={"secondary"}
                    variant={"contained"}
                    className={style.btnSend}
                    disabled={submitting}
                    type="submit"
                    text={"Отправить"}
                />
                <ButtonBox
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                    text={"Undo Changes"}
                />
            </div>
        </Form>
    )
}

InitializeFromStateForm = reduxForm({
    form: 'initializeFromState'
})(InitializeFromStateForm)


let mapStateToProps = (state) => ({
    initialValues: state.load.data,
    currentRecipe: state.recipes.currentRecipe
})

InitializeFromStateForm = connect(mapStateToProps, { load: loadAccount })(InitializeFromStateForm);

class UpdateRecipe extends React.Component {
    state = {
        curRecipe: this.props.currentRecipe
    }



    componentWillUpdate(prevProps) {
        if(this.props.currentRecipe !== prevProps.currentRecipe) {
            
        }
    }

    render() {
        debugger
        console.log(this.props.currentRecipe);
        let onSubmit = (formData) => {
            console.log(formData);
            this.props.updateRecipe(formData._id, formData);
            window.location.reload();
        }
    
        const data = {
            Ingredients: this.state.curRecipe.Ingredients,
            instructions: this.state.curRecipe.instructions,
            description: this.state.curRecipe.description,
            title: this.state.curRecipe.title,
            urlPhoto: this.state.curRecipe.urlPhoto,
            id: this.state.curRecipe.id,
            _id: this.state.curRecipe._id,
            category: this.state.curRecipe.category
        }
    
        return (
            <div className={style.addRecipeForm}>
                <h2>Редактирование рецепта</h2>
                <InitializeFromStateForm data={data} onSubmit={onSubmit} />
            </div>
        )
    }
}

export default UpdateRecipe;