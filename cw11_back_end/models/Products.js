const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   category: {
      type: Schema.Types.ObjectId,
      ref: 'Categories',
      required: true
   },
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   image: {
      type: String,
      required: true
   }
});

const Products = mongoose.model('Products', CommentSchema);

module.exports = Products;