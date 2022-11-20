const home = require('express').Router();

home.get('/', (req, res) => {
    res.render('home', { title: 'Cutelino' });
});

module.exports = home;