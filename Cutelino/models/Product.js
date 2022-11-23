const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0.01 },
    size: { type: Number },
    color: { type: String, required: true },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: httpValidator,
            message: 'must start with http/s'
        }
    },
    category: { type: [Types.ObjectId], default: [], ref: 'Category' }
});


function httpValidator(v) {
    return v.startsWith('http') || v.startsWith('https');
}

const Product = model('Product', productSchema);

module.exports = Product;