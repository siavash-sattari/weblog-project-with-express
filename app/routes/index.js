const adminRouter = require('./admin');
const authRouter = require('./auth');
const auth = require('@middlewares/auth');
const guest = require('@middlewares/guest');
const admin = require('@middlewares/admin');

module.exports = app => {
  app.use('/admin', [auth, admin], adminRouter);
  app.use('/auth', [guest], authRouter);
};
