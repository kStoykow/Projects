const home = require('./home');
const about = require('./about');
const create = require('./create');
const category = require('./category');
const details = require('./details');
const defaultController = require('./default');


module.exports = (app) => {
    app.use('/', home);
    app.use('/about', about);
    app.use('/create', create);
    app.use('/category', category);
    app.use('/details', details);
    app.use('/', defaultController);
}