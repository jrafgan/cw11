const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
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
        price: {
            type: Number,
            validate: {
                validator: async function (value) {
                    if (value <= 0) throw new Error();
                },
                message: 'Ok'
            }
        },
        image: {
            type: String,
            required: true
        }
    })
;

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;