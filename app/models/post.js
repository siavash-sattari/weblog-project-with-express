const db = require('../../database/mysql');

exports.findAll = async () => {
  const [rows] = await db.query('SELECT * FROM posts');
  return rows;
};
