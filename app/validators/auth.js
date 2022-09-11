const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

exports.register = (request, usersEmail) => {
  const errors = [];

  if (request.full_name === '') {
    errors.push('فیلد نام کاربری نمیتواند خالی باشد');
  }

  if (request.email === '') {
    errors.push('فیلد ایمیل نمیتواند خالی باشد');
  }

  if (request.password === '') {
    errors.push('فیلد رمز عبور نمیتواند خالی باشد');
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
