const category = require('express').Router();

const { getCategoryById } = require('../services/category');

category.get('/', async (req, res) => {
    res.render('category', { title: 'Cutelino Categories' });
});


category.get('/:id', async (req, res) => {
    try {
        const category = await getCategoryById(req.params.id);
        console.log(category);
        res.render('category', { title: category.name, category });
    } catch (error) {
        //render 404
    }

});

module.exports = category;