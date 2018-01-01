const bodyParser = require('body-parser');
const cors = require('./cors');

module.exports = [
  bodyParser.json(),
  bodyParser.urlencoded({extended: false}),
  cors
];
