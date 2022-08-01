const jalaliMoment = require('jalali-moment');

exports.toPersianDate = (date, format = 'YYYY/MM/DD') => {
  return jalaliMoment(date).locale('fa').format(format);
};
