import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, GET_CURRENT_RECIPE } from '../actions/types';

const initState = {
    recipes: [],
    loading: false,
    currentRecipe: null
};

const itemsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ITEMS: {
            return {
                ...state,
                recipes: action.payload,
                loading: false
            }
        }

        case ADD_ITEM: {
            return {
                ...state, recipes: [action.payload, ...state.recipes]
            }
        }

        case DELETE_ITEM: {
            return {
                ...state,
                recipes: state.recipes.filter(item => item._id !== action.payload)
            }
        }

        case ITEMS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        
        case GET_CURRENT_RECIPE: {
            return {
                ...state, currentRecipe: action.recipe,
                loading: false
            }
        }

        default: {
            return state;
        }
    }
}

export default itemsReducer;