const { createCategory, getAllCategories } = require('../services/category');
const { getAllProducts, createProduct, getProductById } = require('../services/product');

const create = require('express').Router();

create.get('/category', (req, res) => res.render('createCategory', { title: 'Create Category' }));

create.post('/category', async (req, res) => {
    const newCategory = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    };

    try {
        const category = await createCategory(newCategory);
        res.redirect('/category/' + category._id);
    } catch (error) {
        res.render('404', { title: 'Create Category', error: error.message })
    }
});



create.get('/product', async (req, res) => {
      try {
        const category = await getAllCategories();
        res.render('createProduct', { title: 'Create Product', category })
    } catch (error) {
        res.render('404', { title: 'Create Product' })
    }
});

create.post('/product', async (req, res) => {
    const newProduct = {
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        size: Number(req.body.size),
        color: req.body.color.toLocaleLowerCase(),
        imageUrl: req.body.imageUrl,
    }

    const categoryId = req.body.category;

    try {
        const product = await createProduct(newProduct, categoryId);
        res.redirect('/details/' + product._id);
    } catch (error) {
        res.render('404', { title: 'Create Product', error: error.message })
    }
});

module.exports = create;