const create = require('express').Router();

create.get('/category', (req, res) => {
    res.render('createCategory', { title: 'Create Category' })
});
create.post('/category', (req, res) => { });

create.get('/product', (req, res) => {
    res.render('createProduct', { title: 'Create Product' })
});
create.post('/product', (req, res) => { });

module.exports = create;