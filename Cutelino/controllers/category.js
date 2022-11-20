const details = require('express').Router();

details.get('/', (req, res) => {

    res.render('category', { title: 'Cutelino Categories' });
});


details.get('/:id', (req, res) => {

    const productName = 'current product name';

    res.render('product', { title: productName });
});

module.exports = details;