const Product = require('../models/Product');

async function createProduct(data) {
    return Product.create(data);
}

async function getProductById(id) {
    return Product.findById(id).lean();
}

async function getAllProducts(category) {

}

module.exports = {
    createProduct,
    getProductById,
    getAllProducts
}