import * as axios from 'axios';

const instance = axios.create({
    baseURL: '/api'
});

export const recipesAPI = {
    getRecipes() {
        return instance.get('/recipes')
            .then(response => {
                return response.data;
            })
    },

    createRecipe(recipe) {
        return instance.post('/recipes', recipe)
    }
}