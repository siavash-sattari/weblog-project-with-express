const adminRouter = require('./admin');
const authRouter = require('./auth');
const auth = require('@middlewares/auth');
const guest = require('@middlewares/guest');
const admin = require('@middlewares/admin');
const authController = require('@controllers/auth');

module.exports = app => {
  app.use('/admin', [auth, admin], adminRouter);
  app.use('/auth', [guest], authRouter);
  app.get('/logout', authController.logout);
};
