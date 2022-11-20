const create = require('express').Router();

create.get('/category', async (req, res) => {
    res.render('createCategory', { title: 'Create Category' })
});

create.post('/category', async (req, res) => { });

create.get('/product', async (req, res) => {
    res.render('createProduct', { title: 'Create Product' })
});

create.post('/product', async (req, res) => { });

module.exports = create;