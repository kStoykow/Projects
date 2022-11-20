const home = require('./home');
const about = require('./about');


module.exports = (app) => {
    app.use('/', home);
    app.use('/about', about);
}