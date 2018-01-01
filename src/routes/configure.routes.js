const routesList = require('./routes.list');

module.exports = router => routesList.forEach(route => route(router));