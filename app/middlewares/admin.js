const userRoles = require('@models/userRoles');

module.exports = (req, res, next) => {
  if (req.session.user.role == userRoles.USER) {
    return res.redirect('/');
  }

  next();
};
