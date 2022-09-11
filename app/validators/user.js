const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

exports.create = (request, usersEmail) => {
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

  if (request.email.length > 0 && !EMAIL_PATTERN.test(request.email)) {
    errors.push('فرمت ایمیل وارد شده صحیح نمیباشد');
  }

  if (EMAIL_PATTERN.test(request.email) && usersEmail.includes(request.email)) {
    errors.push('ایمیل وارد شده تکراری میباشد');
  }

  return errors;
};
