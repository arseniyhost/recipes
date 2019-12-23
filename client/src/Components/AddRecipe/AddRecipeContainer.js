import React from 'react';
import AddRecipe from './AddRecipe';
import { connect } from 'react-redux';
import { addRecipeThunk } from './../../store/actions/itemAction';

class AddRecipeContainer extends React.Component {
    // componentDidMount() {
    //     this.props.getRecipeThunk();
    // }

    render() {
        return (
            <div>
                <AddRecipe recipesId={this.props.recipesId} addRecipe={this.props.addRecipeThunk} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        recipesId: state.recipes.recipes
    }
}

export default connect(mapStateToProps, { addRecipeThunk })(AddRecipeContainer);