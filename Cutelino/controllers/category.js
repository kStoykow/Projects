const category = require('express').Router();

const { getCategoryById } = require('../services/category');


category.get('/:id', async (req, res) => {
    try {
        const category = await getCategoryById(req.params.id);
        const products = category.products;
        res.render('category', { title: category.name, category, products });
    } catch (error) {
        //render 404
    }

});

module.exports = category;