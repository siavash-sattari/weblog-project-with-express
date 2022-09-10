const userModel = require('@models/user');
const dateService = require('@services/dateService');
const userValidator = require('@validators/user');
const { statuses } = require('@models/user/userStatus');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

exports.index = async (req, res) => {
  const users = await userModel.findAll();

  const presentedUsers = users.map(user => {
    user.created_at = dateService.toPersianDate(user.created_at);
    return user;
  });

  res.adminRender('admin/users/index', {
    users: presentedUsers,
    helpers: {
      badgeBackground: function (role) {
        let cssClass = '';
        switch (true) {
          case role === 0:
            cssClass = 'badge badge-danger';
            break;
          case role === 1:
            cssClass = 'badge badge-info';
            break;
          case role === 2:
            cssClass = 'badge badge-success';
            break;
        }
        return cssClass;
      },
      userRole: function (role) {
        let uRole = '';
        switch (true) {
          case role === 0:
            uRole = 'کاربر عادی';
            break;
          case role === 1:
            uRole = 'نویسنده';
            break;
          case role === 2:
            uRole = 'مدیر';
            break;
        }
        return uRole;
      }
    }
  });
};

exports.create = async (req, res) => {
  res.adminRender('admin/users/create');
};

exports.store = async (req, res) => {
  let fileExt = '';
  let newFileName = '';

  if (req.files) {
    fileExt = req.files.user_avatar.name.split('.')[1];
    newFileName = `${uuidv4()}.${fileExt}`;
  }

  const userData = {
    full_name: req.body.full_name,
    email: req.body.email,
    password: req.body.password,
    original_password: req.body.password,
    description: req.body.description,
    user_avatar: newFileName,
    role: req.body.role
  };

  const errors = userValidator.create(userData);
  if (errors.length > 0) {
    req.flash('errors', errors);
    return res.redirect('/admin/users/create');
  }

  if (req.files.user_avatar) {
    const fileNewPath = `${process.cwd()}/public/upload/avatars/${newFileName}`;
    req.files.user_avatar.mv(fileNewPath, err => {
      console.log(err);
    });
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
  req.flash('success', 'کاربر موردنظر با موفقیت حذف شد');
  res.redirect('/admin/users');
};

exports.edit = async (req, res) => {
  const userID = req.params.userID;
  if (parseInt(userID) === 0) {
    res.redirect('/admin/users');
  }
  let user = await userModel.find(userID);
  const currentUser = 'user' in req.session && userID == req.session.user.id ? req.session.user : null;
  let isAdmin = false;
  if (currentUser) {
    user = currentUser;
    isAdmin = user.role == 2;
  }

  let showFallbackImg = false;
  const filenames = fs.readdirSync(path.join(__dirname, '../../../public/upload/avatars'));
  if (!filenames.includes(user.user_avatar)) {
    showFallbackImg = true;
  }

  res.adminRender('admin/users/edit', {
    layout: 'admin',
    user,
    isAdmin,
    showFallbackImg,
    userStatus: statuses(),
    helpers: {
      isSelectedStatus: function (role, options) {
        return user.role == role ? options.fn(this) : options.inverse(this);
      }
    }
  });
};

exports.update = async (req, res) => {
  const userID = req.params.userID;
  let user = await userModel.find(userID);

  const currentUser = 'user' in req.session && userID == req.session.user.id ? req.session.user : null;
  if (currentUser) {
    user = currentUser;
  }

  let fileExt = '';
  let newFileName = user.user_avatar;

  if (req.files) {
    fileExt = req.files.user_avatar.name.split('.')[1];
    newFileName = `${uuidv4()}.${fileExt}`;
  }

  if (parseInt(userID) === 0) {
    res.redirect('/admin/users');
  }

  const userData = {
    full_name: req.body.full_name,
    email: req.body.email,
    password: req.body.password,
    original_password: req.body.password,
    description: req.body.description,
    user_avatar: newFileName,
    role: req.body.role
  };

  if (currentUser) {
    user.full_name = req.body.full_name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.original_password = req.body.password;
    user.description = req.body.description;
    user.user_avatar = newFileName;
    user.role = req.body.role;
  }

  const errors = userValidator.create(userData);

  if (errors.length > 0) {
    req.flash('errors', errors);
    return res.redirect(`/admin/users/edit/${userID}`);
  }

  if (req.files) {
    const fileNewPath = `${process.cwd()}/public/upload/avatars/${newFileName}`;
    req.files.user_avatar.mv(fileNewPath, err => {
      console.log(err);
    });
  }
  req.flash('success', 'کاربر موردنظر با موفقیت ویرایش شد');

  const result = await userModel.update(userID, userData);

  const isAuthor = 'user' in req.session && req.session.user.role == 1 ? true : false;
  if (isAuthor) {
    return res.redirect('/admin/dashboard');
  } else {
    return res.redirect('/admin/users');
  }
};
