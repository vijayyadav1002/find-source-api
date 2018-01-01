const {Router} = require('express');
const configureRoutes = require('./configure.routes');

module.exports = app => {
  const router = Router();

  configureRoutes(router);
  app.use('/', router);
  app.get('*', (req, res) => res.sendStatus(200));

  return app;
};
