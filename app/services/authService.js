const userModel = require('@models/user');
const hashService = require('@services/hashService');
const userRoles = require('@models/userRoles');

exports.login = async (email, plainPassword) => {
  const user = await userModel.findByEmail(email);
  if (!user) {
    return false;
  }

  const { password } = user;

  return hashService.comparePassword(plainPassword, password) ? user : false;
};

exports.register = async (full_name, email, password, user_avatar) => {
  const insertId = await userModel.create({
    full_name,
    email,
    password,
    original_password: password,
    user_avatar,
    role: userRoles.USER
  });

  return insertId;
};
