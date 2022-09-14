const db = require('@database/mysql');

exports.totalUsers = async () => {
  const [result] = await db.query('SELECT COUNT(id) as totalUsers FROM users');
  return result[0].totalUsers;
};

exports.totalComments = async () => {
  const [result] = await db.query('SELECT COUNT(id) as totalComments FROM comments WHERE status = 2');
  return result[0].totalComments;
};

exports.totalPosts = async () => {
  const [result] = await db.query('SELECT COUNT(id) as totalPosts FROM posts WHERE status = 2');
  return result[0].totalPosts;
};

exports.totalViews = async () => {
  const [result] = await db.query('SELECT SUM(views) as totalViews FROM posts');
  return result[0].totalViews || 0;
};

exports.totalAuthorComments = async userID => {
  const [result] = await db.query(
    `
  SELECT COUNT(post_id) as totalComments 
  FROM comments c 
  JOIN posts p ON c.post_id = p.id AND c.status=2 AND p.author_id = ?
  `,
    [userID]
  );
  return result[0].totalComments;
};

exports.totalAuthorPosts = async userID => {
  const [result] = await db.query(
    `
  SELECT COUNT(id) as totalPosts 
  FROM posts p 
  WHERE p.author_id = ?
  `,
    [userID]
  );
  return result[0].totalPosts;
};
