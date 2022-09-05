exports.create = request => {
  const errors = [];

  if (request.full_name === '') {
    errors.push('نام کاربر نمیتواند خالی باشد');
  }

  if (request.email === '') {
    errors.push('ایمیل کاربر نمیتواند خالی باشد');
  }

  if (request.password === '') {
    errors.push('پسورد کاربر نمیتواند خالی باشد');
  }

  return errors;
};
