const userModel = require('@models/user');
const dateService = require('@services/dateService');
const { statuses } = require('@models/user/userStatus');

exports.index = async (req, res) => {
  const users = await userModel.findAll();

  const presentedUsers = users.map(user => {
    user.created_at = dateService.toPersianDate(user.created_at);
    return user;
  });

  res.render('admin/users/index', { layout: 'admin', users: presentedUsers });
};

exports.create = async (req, res) => {
  res.render('admin/users/create', { layout: 'admin' });
};

exports.store = async (req, res) => {
  const userData = {
    full_name: req.body.full_name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };

  const insertId = await userModel.create(userData);

  if (insertId) {
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
