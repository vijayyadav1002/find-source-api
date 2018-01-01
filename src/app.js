const express = require('express');
const router = require('./routes');
const middlewares = require('./middlewares');

const app = express();

middlewares(app);
router(app);

module.exports = app;
