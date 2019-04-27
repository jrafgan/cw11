const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: String,
        required: true
    },

});

const Categories = mongoose.model('Categories', CategorySchema);

module.exports = Categories;