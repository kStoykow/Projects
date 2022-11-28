const Product = require('../models/Product');
const Category = require('../models/Category');
const { Types } = require('mongoose');

async function createProduct(productData, categoryId) {
    const category = await Category.findOne({}).where('_id').equals(categoryId);
    const product = await Product.create(productData);
    category.products.push(product);
    product.category.push(category);
    await category.save();
    await product.save();

    return product;
}


async function getProductById(id) {
    try {
        return Product.findOne({}).where('_id').equals(Types.ObjectId(id)).lean();
    } catch (error) {
        throw new Error('There is no product with such id.');
    }
}

async function getSimilar(product) {
    return await Product.find({})
        .where('price').gte(Number(product.price) - 5).lte(Number(product.price) + 5)
        .where('name').ne(product.name)
        .limit(4).lean();
}

async function getAllColors() {
    return Product.find({}).select('color').lean();
}

async function searchProduct(search, category, color) {
    color = color == 'All' ? '' : color;

    if (category != 'All') {
        return Product.find({}).populate('category')
            .where('category').equals(category)
            .where({ 'color': { '$regex': color, '$options': 'i' } })
            .where({ 'name': { '$regex': search, '$options': 'i' } }).lean();
    }

    return Product.find({})
        .where({ 'color': { '$regex': color, '$options': 'i' } })
        .where({ 'name': { '$regex': search, '$options': 'i' } }).lean();
}

async function updateProduct(id, data) {
    const product = await Product.findById(id);
    for (const key in data) {
        product[key] = data[key];
    }
    product.save();
}

async function deleteProduct(id) {
    await Product.deleteOne({ _id: id });
}

module.exports = {
    createProduct,
    getProductById,
    getSimilar,
    getAllColors,
    searchProduct,
    updateProduct,
    deleteProduct
}