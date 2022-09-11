const authService = require('@services/authService');
const userRoles = require('@models/userRoles');
const userModel = require('@models/user');
const authValidator = require('@validators/auth');
const { v4: uuidv4 } = require('uuid');

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
  const pathToRedirect = user.role == userRoles.ADMIN || user.role == userRoles.AUTHOR ? '/admin/dashboard' : '/';
  return res.redirect(pathToRedirect);
};

exports.showRegister = (req, res) => {
  res.newRender('auth/register', { layout: 'auth' });
};

exports.doRegister = async (req, res) => {
  const allEmails = await userModel.findAll(['email']);
  const usersEmail = allEmails.map(e => e.email);
  let fileExt = '';
  let newFileName = '';

  if (req.files) {
    fileExt = req.files.user_avatar.name.split('.')[1];
    newFileName = `${uuidv4()}.${fileExt}`;
  }

  const { full_name, email, password } = req.body;

  const userData = {
    full_name,
    email,
    password,
    user_avatar: newFileName
  };

  const errors = authValidator.register(userData, usersEmail);
  if (errors.length > 0) {
    req.flash('errors', errors);
    return res.redirect('/auth/register');
  }

  const newUserId = await authService.register(full_name, email, password, newFileName);

  if (!newUserId) {
    req.flash('errors', 'در حال حاضر امکان ثبت نام وجود ندارد');
    return res.redirect('/auth/register');
  }

  if (req.files.user_avatar) {
    const fileNewPath = `${process.cwd()}/public/upload/avatars/${newFileName}`;
    req.files.user_avatar.mv(fileNewPath, err => {
      console.log(err);
    });
  }

  return res.redirect('/auth/login');
};

exports.logout = async (req, res) => {
  req.session.destroy(error => {
    res.redirect('/');
  });
};
