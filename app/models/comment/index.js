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

exports.findAuthorComments = async userID => {
  const [rows] = await db.query(
    `
  SELECT c.*,p.title
  FROM comments c 
  JOIN posts p ON c.post_id = p.id AND p.author_id = ?
  ORDER BY c.created_at DESC
  `,
    [userID]
  );
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

exports.create = async commentData => {
  const [result] = await db.query(`INSERT INTO comments SET ?`, [commentData]);
  return result.insertId;
};

exports.findByPostId = async (postId, status = commentStatus.APPROVED) => {
  const [rows] = await db.query(
    `
  SELECT *
  FROM comments  
  WHERE post_id =?
  AND status=?
  `,
    [postId, status]
  );
  return rows;
};

exports.latestComments = async (limit = 10) => {
  const [rows] = await db.query(
  `
  SELECT c.*,p.title
  FROM comments c 
  JOIN posts p ON c.post_id = p.id
  ORDER BY created_at DESC
  LIMIT ${limit}
  `
  );
  return rows;
};

exports.latestAuthorComments = async (userID,limit = 10) => {
  const [rows] = await db.query(
    `
    SELECT c.*,p.title
    FROM comments c 
    JOIN posts p ON c.post_id = p.id AND c.status=2 AND p.author_id = ?
    ORDER BY created_at DESC
    LIMIT ${limit}
    `,
    [userID]
  );
  return rows;
};
