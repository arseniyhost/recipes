import React from 'react';
import { Redirect } from 'react-router-dom';

class UpdateRecipe extends React.Component {
    state = {
        recipeTitle: this.props.currentRecipe.title,
        recipeDest: this.props.currentRecipe.description,
        recipeImg: this.props.currentRecipe.urlPhoto
    }

    onTitleChange = (e) => {
        this.setState({
            recipeTitle: e.currentTarget.value
        })
    }

    onDescriptionChange = (e) => {
        this.setState({
            recipeDest: e.currentTarget.value
        })
    }

    onImgChange = (e) => {
        this.setState({
            recipeImg: e.currentTarget.value
        })
    }

    updateCurrentRecipe = () => {
        let idRecipe = this.props.currentRecipe._id;
        let recipe = {
            title: this.state.recipeTitle,
            Ingredients: this.props.currentRecipe.Ingredients,
            instructions: this.props.currentRecipe.instructions,
            description: this.state.recipeDest,
            urlPhoto: this.state.recipeImg,
            category: this.props.currentRecipe.category
        };
        console.log(recipe);
        console.log(idRecipe);
        this.props.updateRecipe(idRecipe, recipe);
        window.location.reload();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.recipeTitle !== this.props.recipeTitle) {
            this.setState({
                status: this.props.recipeTitle
            });
        }
        if (prevProps.recipeDest !== this.props.recipeDest) {
            this.setState({
                status: this.props.recipeDest
            });
        }
        if (prevProps.recipeImg !== this.props.recipeImg) {
            this.setState({
                status: this.props.recipeImg
            });
        }
    }


    render() {
        return (
            <div>
                <div>
                    <label>Title: </label>
                    <input onChange={this.onTitleChange} type="text" value={this.state.recipeTitle} />
                </div>
                <div>
                    <label>Description: </label>
                    <input onChange={this.onDescriptionChange} type="text" value={this.state.recipeDest} />
                </div>
                <div>
                    <label>Img: </label>
                    <input onChange={this.onImgChange} type="text" value={this.state.recipeImg} />
                </div>
                <input type={"submit"} onClick={this.updateCurrentRecipe} value="Update" />
            </div>
        )
    };
}

export default UpdateRecipe;