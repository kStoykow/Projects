const { Schema, model, Types } = require('mongoose');

const categorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: httpValidator
        }
    },
    products: { type: [Types.ObjectId], default: [], ref: 'Product' }
});

function httpValidator(v) {
    return v.startsWith('http') || v.startsWith('https');
}

const Category = model('Category', categorySchema);

module.exports = Category;