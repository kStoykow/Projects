const Category = require("../models/Category");


async function createCategory(data) {
    return Category.create(data);
}

async function getAllCategories() {
    return Category.find({}).lean();
}

async function getCategoryById(id) {
    return Category.findById(id).populate('products').lean();
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
}