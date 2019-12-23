const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    id: Number,
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    urlPhoto: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Ingredients: [],
    instructions: []
})

// mongoose.model('recipes', recipeSchema);
module.exports = Recipe = mongoose.model("recipes", recipeSchema);

// //Create Sch
// const ItemsSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = Item = mongoose.model('items', ItemsSchema);