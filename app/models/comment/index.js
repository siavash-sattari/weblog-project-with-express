const db = require('@database/mysql');
const commentStatus = require('./commentStatus');

exports.findAll = async () => {
  const [rows] = await db.query(`
  SELECT c.*,p.title
  FROM comments c 
  JOIN posts p ON c.post_id = p.id
  ORDER BY c.created_at DESC
  `);
  return rows;
};

exports.approve = async commentID => {
  const [result] = await db.query(`UPDATE comments SET status=? WHERE id=? LIMIT 1`, [commentStatus.APPROVED, commentID]);
  return result.affectedRows > 0;
};

exports.reject = async commentID => {
  const [result] = await db.query(`UPDATE comments SET status=? WHERE id=? LIMIT 1`, [commentStatus.REJECTED, commentID]);
  return result.affectedRows > 0;
};

exports.delete = async commentID => {
  const [result] = await db.query(`DELETE FROM comments WHERE id=? LIMIT 1`, [commentID]);
  return result.affectedRows > 0;
};
