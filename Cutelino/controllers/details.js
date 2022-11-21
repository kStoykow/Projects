const details = require('express').Router();

const { getProductById } = require('../services/product');

details.get('/:id', async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        product.price = product.price.toFixed(2) + '$';
        if (product.size == 0) {
            delete product.size;
        }

        res.render('details', { title: product.name, product });
    } catch (error) {
        //render 404
    }

});

module.exports = details;