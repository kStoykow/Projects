const details = require('express').Router();

details.get('/', async (req, res) => {
    res.render('category', { title: 'Cutelino Categories' });
});


details.get('/:id', async (req, res) => {
    const productName = 'current product name';
    res.render('product', { title: productName });
});

module.exports = details;