const allowedHeaders = [
  'Content-Type',
  'Authorizationtoken',
  'Activityid',
  'Context',
  'Useruniqueid',
  'Content-Length',
  'X-Requested-With',
  'X-HTTP-Method-Override',
];

module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', allowedHeaders.join(', '));
  next();
};