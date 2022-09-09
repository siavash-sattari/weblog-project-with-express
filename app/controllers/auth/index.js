const authService = require('@services/authService');
const userRoles = require('@models/userRoles');
const authValidator = require('@validators/auth');

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

exports.showRegister = (req, res) => {
  res.newRender('auth/register', { layout: 'auth' });
};

exports.doRegister = async (req, res) => {
  const { full_name, email, password } = req.body;

  const userData = {
    full_name,
    email,
    password
  };

  const errors = authValidator.register(userData);
  if (errors.length > 0) {
    req.flash('errors', errors);
    return res.redirect('/auth/register');
  }

  const newUserId = await authService.register(full_name, email, password);
  if (!newUserId) {
    req.flash('errors', 'در حال حاضر امکان ثبت نام وجود ندارد');
    return res.redirect('/auth/register');
  }
  return res.redirect('/auth/login');
};

exports.logout = async (req, res) => {
  req.session.destroy(error => {
    res.redirect('/auth/login');
  });
};
