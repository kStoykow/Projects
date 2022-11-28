const details = require('express').Router();

const { getProductById, getSimilar } = require('../services/product');

details.get('/:id', async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        const similar = await getSimilar(product);
        product.price = product.price.toFixed(2);

        if (product.size == 0) {
            delete product.size;
        }
        const isOwner = req.user?._id == product.creatorId;

        res.render('details', { title: product.name, isOwner, product, similar });

    } catch (error) {
        res.render('404', { title: 'Details', error: 'There is no product with such ID.' })
    }

});

module.exports = details;