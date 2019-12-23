import { combineReducers } from 'redux';
import recipesReducer from './recipeReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    recipes: recipesReducer,
    auth: authReducer,
    error: errorReducer,
    form: formReducer
})