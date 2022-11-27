const user = require('express').Router();
const jwt = require('jsonwebtoken');

const { register, login } = require('../services/auth');


user.get('/login', (req, res) => {
    console.log(req.user);
    res.render('login', { title: 'Login' });
});

user.post('/login', async (req, res) => {
    try {
        if (req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required.');
        }

        const token = await login(req.body.username, req.body.password);

        res.cookie('user', token);
        res.redirect('/');

    } catch (error) {
        res.render('login', { title: 'Login', error: error.message });
    }
});


user.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

user.post('/register', async (req, res) => {
    try {
        if (req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required.');
        }
        if (req.body.password != req.body.repass) {
            throw new Error('Passwords must match.');
        }

        await register(req.body.username, req.body.password);


        res.redirect('/');

    } catch (error) {
        res.render('register', { title: 'Register', error: error.message });
    }
});

user.get('/logout', (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
});

module.exports = user;