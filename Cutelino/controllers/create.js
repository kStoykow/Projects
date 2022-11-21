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
        //make 404 page and render
    }
});



create.get('/product', async (req, res) => {
    try {
        const category = await getAllCategories();
        res.render('createProduct', { title: 'Create Product', category })
    } catch (error) {
        //make 404 page and render
    }
});

create.post('/product', async (req, res) => {
    const newProduct = {
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        size: Number(req.body.size),
        color: req.body.color,
        imageUrl: req.body.imageUrl,
    }

    const categoryId = req.body.category;

    try {
        const product = await createProduct(newProduct, categoryId);
        res.redirect('/details/' + product._id);
    } catch (error) {
        console.log(error);
        //render 404        
    }
});

module.exports = create;