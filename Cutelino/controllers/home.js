const { getAllCategories, getCategoryById } = require('../services/category');
const { searchProduct, getAllColors } = require('../services/product');

const home = require('express').Router();

home.get('/', async (req, res) => {
    const categories = await getAllCategories();
    const colors = await getAllColors();

    if (req.query.search != undefined) {
        const search = req.query.search;
        const category = req.query.category;
        const color = req.query.color;

        const query = { search, category, color };


        const found = await searchProduct(search, category, color);

        if (found.length == 0) {
            res.render('home', { title: 'Cutelino', found, categories, colors, query, error: "No such product, try again." });
        } else {
            res.render('home', { title: 'Cutelino', found, categories, colors, query });
        }


    } else {
        res.render('home', { title: 'Cutelino', categories, colors });
    }
});

module.exports = home;
