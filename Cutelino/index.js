const express = require('express');
const handlebars = require('express-handlebars').create({ extname: '.hbs' });
const bodyParser = require('body-parser');


const routes = require('./controllers/routes');
start();

async function start() {
    const app = express();
    app.engine('.hbs', handlebars.engine);
    app.set('view engine', '.hbs');

    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/static', express.static('static'));

    routes(app);

    app.listen(3000, () => 'Server listen at port 3000...')
}
