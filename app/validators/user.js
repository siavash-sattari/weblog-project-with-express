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

  if (request.description === '') {
    errors.push('فیلد توضیحات نمیتواند خالی باشد');
  }

  if (!request.user_avatar) {
    errors.push(' انتخاب تصویر پروفایل ضروری میباشد');
  }

  return errors;
};
