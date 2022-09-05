module.exports = session => {
  const MySQLStore  = require('express-mysql-session')(session);

  const mysqlOptions = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
  };

  return new MySQLStore(mysqlOptions);
};
