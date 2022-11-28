const { getAllCategories } = require('../services/category');
const { updateProduct } = require('../services/product');

const edit = require('express').Router();

edit.get('/:id', async (req, res) => {
    try {
        const category = await getAllCategories();

        res.render('edit', { category });
    } catch (error) {
        res.render('edit', { title: 'No such product.', error: error.message });
    }

});

edit.post('/:id', async (req, res) => {
    try {
        const productData = {
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            size: Number(req.body.size),
            color: req.body.color,
            imageUrl: req.body.imageUrl,
            category: req.body.category
        };

        await updateProduct(req.params.id, productData);

        res.redirect('/details/' + res.locals.product._id);
    } catch (error) {
        res.render('404');

    }
});

module.exports = edit;