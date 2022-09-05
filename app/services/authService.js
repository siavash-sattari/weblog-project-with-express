const userModel = require('@models/user');
const hashService = require('@services/hashService');

exports.login = async (email, plainPassword) => {
  const user = await userModel.findByEmail(email);
  if (!user) {
    return false;
  }

  const { password } = user;

  return hashService.comparePassword(plainPassword, password) ? user : false;
};
