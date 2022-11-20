const { getAllCategories } = require('../services/category');

const home = require('express').Router();

home.get('/', async (req, res) => {
    const categories = await getAllCategories();
    
    res.render('home', { title: 'Cutelino', categories });
});

module.exports = home;