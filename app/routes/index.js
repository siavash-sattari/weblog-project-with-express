const adminRouter = require('./admin');
const authRouter = require('./auth');

module.exports = app => {
  app.use('/admin', adminRouter);
  app.use('/auth', authRouter);
};
