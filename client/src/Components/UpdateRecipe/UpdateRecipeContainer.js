import React from 'react';
import UpdateRecipe from './UpdateRecipe';
import { connect } from 'react-redux';
import { updateRecipe } from './../../store/actions/itemAction';
import { Redirect } from 'react-router-dom';

class UpdateRecipeContainer extends React.Component {
    render() {
        if (!this.props.currentRecipe) {
            return <Redirect to="/user" />
        }
        return (
            <UpdateRecipe updateRecipe={this.props.updateRecipe} currentRecipe={this.props.currentRecipe} />
        );
    }
}

let mapStateToProps = (state) => ({
    currentRecipe: state.recipes.currentRecipe
})

export default connect(mapStateToProps, { updateRecipe })(UpdateRecipeContainer);