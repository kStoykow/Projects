const { deleteProduct } = require('../services/product');

const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    try {
        res.render('delete');
    } catch (error) {
        res.render('delete', { title: 'No such product.', error: error.message });
    }
});

deleteController.post('/:id', async (req, res) => {
    try {
        await deleteProduct(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.render('404');
    }
});

module.exports = deleteController;