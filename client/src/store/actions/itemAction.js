import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, GET_CURRENT_RECIPE, ADD_RECIPE } from './../actions/types';
import * as axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
import { recipesAPI } from './../../api/api';

export const getItems = () => (dispatch) => {
    dispatch(setItemsLoading());
    axios
        .get('/api/recipes')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addItem = (item) => (dispatch, getState) => {
    axios
        .post('api/recipes', item, tokenConfig(getState))
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
};

export const deleteItem = (id) => (dispatch, getState) => {
    axios.delete(`/api/recipes/${id}`, tokenConfig(getState)).then(res =>
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    )
};

export const getCurrentRecipe = (recipeContent) => ({ type: GET_CURRENT_RECIPE, recipeContent});

export const setItemsLoading = () => ({ type: ITEMS_LOADING });

export const addRecipe = (recipe) => ({ type: ADD_RECIPE, recipe });

export const addRecipeThunk = (recipe) => async dispatch => {
    let response = await recipesAPI.createRecipe(recipe);
    dispatch(addRecipe(recipe));

    console.log(response.data.recipe);
}