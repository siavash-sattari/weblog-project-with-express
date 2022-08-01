const db = require('@database/mysql');

exports.findAll = async () => {
  const [rows] = await db.query(`
  SELECT p.*,u.full_name 
  FROM posts p 
  JOIN users u ON p.author_id = u.id
  `);
  return rows;
};
