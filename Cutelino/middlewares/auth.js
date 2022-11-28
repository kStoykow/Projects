const jwt = require('jsonwebtoken');
const secretKey = 'qweqewqr';

module.exports = () => (req, res, next) => {
    const token = req.cookies.user;
    if (token) {
        try {
            const data = jwt.verify(token, secretKey);
            req.user = data;
            res.locals.user = data;
        } catch (error) {
            res.clearCookie('user');
            return res.redirect('/user/login');
        }
    }


    next();
}