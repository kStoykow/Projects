const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0.01 },
    size: { type: Number },
    color: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

const Product = model('Product', productSchema);

module.exports = Product;