const edit = require('express').Router();

edit.get('/', (req, res) => { res.render('edit') });

edit.post('/', (req, res) => { res.render('edit') });

module.exports = edit;