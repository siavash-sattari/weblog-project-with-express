const userStatuses = {
  USER: 0,
  AUTHOR: 1,
  ADMIN: 2
};

const statusesAsText = {
  [userStatuses.USER]: 'کاربری',
  [userStatuses.AUTHOR]: 'نویسنده',
  [userStatuses.ADMIN]: 'مدیر'
};

exports.statuses = () => {
  return userStatuses;
};

exports.readbleStatuses = (status = null) => {
  return status ? statusesAsText[status] : statusesAsText;
};
