exports.create = request => {
  const errors = [];

  if (request.title === '') {
    errors.push('عنوان نمیتواند خالی باشد');
  }

  if (request.slug === '') {
    errors.push('نامک نمیتواند خالی باشد');
  }

  if (request.content === '') {
    errors.push('محتوا نمیتواند خالی باشد');
  }

  return errors;
};
