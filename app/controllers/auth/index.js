const authService = require('@services/authService');
const userRoles = require('@models/userRoles');

exports.showLogin = (req, res) => {
  res.newRender('auth/login', { layout: 'auth' });
};

exports.doLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.login(email, password);
  if (!user) {
    req.flash('errors', 'ایمیل یا کلمه عبور معنبر نمی باشد');
    return res.redirect('/auth/login');
  }
  req.session.user = user;
  const pathToRedirect = user.role === userRoles.ADMIN ? '/admin/dashboard' : '/';
  return res.redirect(pathToRedirect);
};

exports.showRegister = (req, res) => {};

exports.doRegister = (req, res) => {};
