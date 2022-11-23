const defaultController = require('express').Router();

defaultController.all('*', (req, res) => res.render('404', { title: 'Page not found' }));

module.exports = defaultController;