const category = require('express').Router();

const { getCategoryById } = require('../services/category');


category.get('/:id', async (req, res) => {
    try {
        const category = await getCategoryById(req.params.id);
        const products = category.products;
        res.render('category', { title: category.name, category, products });
    } catch (error) {
        res.render('404', { title: 'Category not found' });
    }

});

module.exports = category;