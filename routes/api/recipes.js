const express = require('express');
const app = express.Router();
const auth = require('../../middleware/auth');

// Recipe Model
const Recipe = require('../../models/Recipe')

// router.get('/', (req, res) => {
//     Item.find()
//         .sort({ date: -1 })
//         .then(items => res.json(items))
// });

// router.post('/', auth, (req, res) => {
//     const newItem = new Item({
//         name: req.body.name
//     });

//     newItem.save().then(item => res.json(item));
// });

// router.delete('/:id', auth, (req, res) => {
//     Item.findById(req.params.id)
//         .then(item => item.remove().then(() => res.json({success: true})))
//         .catch(err => res.status(404).json({success: false}));
// });


app.get(`/`, (req, res) => {
    Recipe.find()
    .then(recipes => res.json(recipes))
    // return res.status(200).send(recipes);
});

app.post(`/`, (req, res) => {
    let newRecipe = Recipe.create(req.body);
    newRecipe.save().then(recipe => res.json(recipe));
})

app.delete(`/:id`, (req, res) => {
    const { id } = req.params;

    Recipe.findByIdAndDelete(id)
    .then(recipe => recipe.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));

    // return res.status(202).send({
    //     error: false,
    //     recipe
    // })

})

module.exports = app;