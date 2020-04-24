import React from 'react';
import { Redirect } from 'react-router-dom';

class UpdateRecipe extends React.Component {
    state = {
        recipeTitle: this.props.currentRecipe.title,
        recipeDest: this.props.currentRecipe.description
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

    updateCurrentRecipe = () => {
        let idRecipe = this.props.currentRecipe.id;
        let recipe = {
            title: this.state.recipeTitle,
            Ingredients: this.props.currentRecipe.Ingredients,
            instructions: this.props.currentRecipe.instructions,
            description: this.state.recipeDest,
            urlPhoto: this.props.currentRecipe.urlPhoto,
            category: this.props.currentRecipe.category
        };
        console.log(recipe);
        console.log(idRecipe);
        this.props.updateRecipe(idRecipe, recipe);
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
                <input type={"submit"} onClick={this.updateCurrentRecipe} value="Update" />
            </div>
        )
    };
}

export default UpdateRecipe;