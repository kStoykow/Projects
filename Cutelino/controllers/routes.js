const home = require('./home');
const about = require('./about');
const create = require('./create');
const category = require('./category');
const details = require('./details');
const defaultController = require('./default');
const user = require('./user');
const deleteController = require('./delete');
const edit = require('./edit');


module.exports = (app) => {
    app.use('/', home);
    app.use('/about', about);
    app.use('/user', user);
    app.use('/edit', edit);
    app.use('/delete', deleteController);
    app.use('/create', create);
    app.use('/category', category);
    app.use('/details', details);
    app.use('/', defaultController);
}