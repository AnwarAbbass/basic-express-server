'use strict';

const express = require('express');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const namechecker = require('./middleware/validator.js');

const app = express();

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.send('you are in the home page');
});

app.get('/person', namechecker(), (req, res) => {
    console.log(req.query.name)
    res.json({
        name: req.query.name
    });
});

app.get('/bad', (req, res) => {
    throw new Error('SOMETHING IS ERROR');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(PORT) {
    app.listen(PORT, () => console.log(`you listen on port  ${PORT}`))
}

module.exports = {
    app: app,
    start: start
};