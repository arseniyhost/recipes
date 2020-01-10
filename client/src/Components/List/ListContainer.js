import React from 'react';
import { connect } from 'react-redux';
import { getItems, addItem, deleteItem, getCurrentRecipe } from './../../store/actions/itemAction';
import PropTypes from 'prop-types';
import List from './List';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ListContainer extends React.Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.getItems();
    }

    onChangeRecipe = (recipeId) => {
        this.props.getCurrentRecipe(recipeId);
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        let cater = this.props.match.params.category;

        return (
            <List category={cater} recipes={this.props.recipes} onChangeRecipe={this.onChangeRecipe} loading={this.props.loading} isAuthenticated={this.props.isAuthenticated} />
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

export default compose(
    connect(mapStateToProps, { getItems, addItem, deleteItem, getCurrentRecipe }),
    withRouter
)
    (ListContainer);
