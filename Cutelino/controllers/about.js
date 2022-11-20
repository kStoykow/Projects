const about = require('express').Router();

about.get('/', (req, res) => res.render('about', { title: 'About page' }));

module.exports = about;