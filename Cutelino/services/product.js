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
    return Product.findOne({}).where('_id').equals(Types.ObjectId(id)).lean();
}

async function getSimilar(product) {
    return await Product.find({})
        .where('price').gte(Number(product.price) - 5).lte(Number(product.price) + 5)
        .where('name').ne(product.name)
        .limit(4).lean();
}

module.exports = {
    createProduct,
    getProductById,
    getSimilar
}