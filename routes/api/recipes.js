const express = require('express');
const app = express.Router();
const auth = require('../../middleware/auth');

// Recipe Model
const Recipe = require('../../models/Recipe')

app.get(`/`, (req, res) => {
    Recipe.find()
    .then(recipes => {
        return res.json(recipes)
    })
    // return res.status(200).send(recipes);
});

app.get(`/:id`, (req, res) => {
    const id = req.params.id;
    const details = { 'id': id};
    Recipe.findOne(details, (err, item) => {
        if(err) {
            res.send(err);
        } else {
            res.send(item);
        }
    })
});

app.post(`/`, (req, res) => {
    let newRecipe = Recipe.create(req.body);
    newRecipe.save().then(recipe => res.json(recipe));
});

app.put(`/:id`, async (req, res) => {
    const {id} = req.params;
    //const details = {'id': id};
    // const recipe = { 
    //     title: req.body.title, 
    //     urlPhoto: req.body.urlPhoto,
    //     category: req.body.category,
    //     description: req.body.description,
    //     instructions: req.body.instructions,
    //     Ingredients: req.body.Ingredients
    // };
    let recipe = await Recipe.findByIdAndUpdate(id, req.body);
    // Recipe.findOne(details, recipe, (err, result) => {
    //     if(err) {
    //         res.send(err);
    //     } else {
    //         res.send(recipe);
    //     }
    // })
    return res.status(202).send({
        error: false,
        recipe
    })
})

app.delete(`/:id`, (req, res) => {
    const { id } = req.params;
    // const idRecipe = { 'id': id};
    Recipe.findByIdAndDelete(id)
    .then(recipe => recipe.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
})

module.exports = app;