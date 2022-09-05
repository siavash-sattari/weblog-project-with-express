const userModel = require('@models/user');
const dateService = require('@services/dateService');
const userValidator = require('@validators/user');
const { statuses } = require('@models/user/userStatus');

exports.index = async (req, res) => {
  const users = await userModel.findAll();

  const presentedUsers = users.map(user => {
    user.created_at = dateService.toPersianDate(user.created_at);
    return user;
  });

  res.adminRender('admin/users/index', { users: presentedUsers });
};

exports.create = async (req, res) => {
  res.adminRender('admin/users/create');
};

exports.store = async (req, res) => {
  const userData = {
    full_name: req.body.full_name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };

  const errors = userValidator.create(userData);
  if (errors.length > 0) {
    req.flash('errors', errors);
    return res.redirect('/admin/users/create');
  }

  const insertId = await userModel.create(userData);

  if (insertId) {
    req.flash('success', 'کاربر جدید با موفقیت ایجاد شد');
    res.redirect('/admin/users');
  }
};

exports.remove = async (req, res) => {
  const userID = req.params.userID;
  if (parseInt(userID) === 0) {
    res.redirect('/admin/users');
  }
  const result = await userModel.delete(userID);
  res.redirect('/admin/users');
};

exports.edit = async (req, res) => {
  const userID = req.params.userID;
  if (parseInt(userID) === 0) {
    res.redirect('/admin/users');
  }
  const user = await userModel.find(userID);
  const users = await userModel.findAll(['id', 'full_name']);
  res.render('admin/users/edit', {
    layout: 'admin',
    users,
    user,
    userStatus: statuses(),
    helpers: {
      isSelectedStatus: function (role, options) {
        return user.role === role ? options.fn(this) : options.inverse(this);
      }
    }
  });
};

exports.update = async (req, res) => {
  const userID = req.params.userID;
  if (parseInt(userID) === 0) {
    res.redirect('/admin/users');
  }
  const userData = {
    full_name: req.body.full_name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };
  const result = await userModel.update(userID, userData);
  return res.redirect('/admin/users');
};
