const adminRouter = require('./admin');

module.exports = app => {
  app.use('/admin', adminRouter);
};
