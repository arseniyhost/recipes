import React from 'react';
import AddRecipe from './AddRecipe';
import { connect } from 'react-redux';
import { addRecipeThunk, getItems } from './../../store/actions/itemAction';

class AddRecipeContainer extends React.Component {
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        return (
            <div>
                <AddRecipe getItems={this.props.getItems} isAuthenticated={this.props.isAuthenticated} recipesId={this.props.recipesId} addRecipe={this.props.addRecipeThunk} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        recipesId: state.recipes.recipes,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { addRecipeThunk, getItems })(AddRecipeContainer);