const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const secretKey = 'qweqewqr';

async function register(username, password) {
    const match = await User.findOne({ username: { $regex: new RegExp(username), $options: "i" } });

    if (match != null) {
        throw new Error('Username already exists.');
    }
    const hashedPass = await bcrypt.hash(password, 10);

    return await User.create({ username, password: hashedPass });

}

async function login(username, password) {
    const user = await User.findOne({ username: { $regex: new RegExp(username), $options: "i" } });

    if (user == null || await bcrypt.compare(password, user.password) == false) {
        throw new Error('Wrong username or password.');
    }

    const payload = { _id: user._id, username: user.username };
    const token = jwt.sign(payload, secretKey, { expiresIn: '30min' });
    return token;
}

module.exports = {
    register,
    login
}