const user = require('express').Router();

user.get('/login', (req, res) => {
    res.render('login');
});
user.post('/login', (req, res) => {
    res.render('login');
});


user.get('/register', (req, res) => {
    res.render('register');
});
user.post('/register', (req, res) => {
    res.render('register');
});

module.exports = user;