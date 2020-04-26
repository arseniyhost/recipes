import React from 'react';
import UpdateRecipe from './UpdateRecipe';
import { connect } from 'react-redux';
import { updateRecipe } from './../../store/actions/itemAction';
import { Redirect } from 'react-router-dom';
import { load } from './../../store/reducers/loadReducer';

class UpdateRecipeContainer extends React.Component {
    render() {
        if (!this.props.currentRecipe) {
            return <Redirect to="/user" />
        }
        return (
            <UpdateRecipe load={this.props.load} updateRecipe={this.props.updateRecipe} currentRecipe={this.props.currentRecipe} />
        );
    }
}

let mapStateToProps = (state) => ({
    currentRecipe: state.recipes.currentRecipe,
    initialValues: state.load.data
})

export default connect(mapStateToProps, { updateRecipe, load })(UpdateRecipeContainer);