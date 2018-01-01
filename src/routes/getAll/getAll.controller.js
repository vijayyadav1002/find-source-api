const handleStatusRequest = (req, res) => {
    const environment = process.env.APP_ENV || 'development';
    res.json({environment});
};

module.exports = {
  handleStatusRequest
};