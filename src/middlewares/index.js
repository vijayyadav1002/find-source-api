const middlewareConfig = require('./middlewares.config');

const addMiddleWare = app => middleware => app.use(middleware);

module.exports = app => {
  middlewareConfig.forEach(addMiddleWare(app));
  return app;
};
