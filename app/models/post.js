const db = require('@database/mysql');

exports.findAll = async () => {
  const [rows] = await db.query(`
  SELECT p.*,u.full_name 
  FROM posts p 
  JOIN users u ON p.author_id = u.id
  ORDER BY p.created_at DESC
  `);
  return rows;
};

exports.create = async postData => {
  const [result] = await db.query(`INSERT INTO posts set ?`, [postData]);
  return result.insertId;
};

exports.delete = async postID => {
  const [result] = await db.query(`DELETE FROM posts WHERE id=?`, [postID]);
  return result.affectedRows > 0;
};
