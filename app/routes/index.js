const adminRouter = require('./admin');
const authRouter = require('./auth');
const auth = require('@middlewares/auth');

module.exports = app => {
  app.use('/admin', [auth], adminRouter);
  app.use('/auth', authRouter);
};
