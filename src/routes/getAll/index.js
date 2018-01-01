const {Router} = require('express');
const {handleStatusRequest} = require('./getAll.controller');

module.exports = router => {
  const statusRouter = Router();

  statusRouter
    .route('/')
    .get(handleStatusRequest);

  router.use('/getAll', statusRouter);
  return router;
};
