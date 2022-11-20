const { Schema, model, Types } = require('mongoose');

const categorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    products: { type: [Types.ObjectId], default: [], ref: 'Product' }
});

const Category = model('Category', categorySchema);

module.exports = Category;