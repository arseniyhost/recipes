import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';
import { getCurrentRecipe } from './../../store/actions/itemAction';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class RecipeContainer extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        let id = this.props.match.params.id;
        this.onChangeRecipe(id);
    }


    onChangeRecipe = (recipeId) => {
        this.props.getCurrentRecipe(recipeId);
    }
    
    render() {
        return (
            <div>
                <Recipe key={1} newContent={this.props.newContent} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        newContent: state.recipes.currentRecipe,
    }
}

export default compose(
    connect(mapStateToProps, { getCurrentRecipe }),
    withRouter
)(RecipeContainer);
