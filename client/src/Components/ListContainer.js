import React from 'react';
import { connect } from 'react-redux';
import { getItems, addItem, deleteItem, getCurrentRecipe } from '../store/actions/itemAction';
import PropTypes from 'prop-types';
import List from './List';

class ListContainer extends React.Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getItems();
    }

    onChangeRecipe = (recipeId) => {
        this.props.getCurrentRecipe(recipeId);
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        return (
           <List recipes={this.props.recipes} onChangeRecipe={this.onChangeRecipe} loading={this.props.loading} isAuthenticated={this.props.isAuthenticated} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        recipes: state.recipes.recipes,
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.recipes.loading
    }
}

export default connect(mapStateToProps, { getItems, addItem, deleteItem, getCurrentRecipe })(ListContainer);
