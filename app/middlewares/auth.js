const userRoles = require('@models/userRoles');

module.exports = (req, res, next) => {
  if (!req.session.hasOwnProperty('user')) {
    return res.redirect('/');
  }

  if (req.session.user.role !== userRoles.ADMIN) {
    return res.redirect('/');
  }
  
  next();
};
