const home = require('./home');
const about = require('./about');
const create = require('./create');
const category = require('./category');


module.exports = (app) => {
    app.use('/', home);
    app.use('/about', about);
    app.use('/create', create);
    app.use('/category', category);
}