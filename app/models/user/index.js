const db = require('@database/mysql');
const hashService = require('@services/hashService');

exports.find = async userID => {
  const [rows] = await db.query(
    `
  SELECT * 
  FROM users
  WHERE id=? LIMIT 1
  `,
    [userID]
  );
  return rows.length === 1 ? rows[0] : null;
};

exports.findAll = async (columns = []) => {
  const sqlColumns = columns.length > 0 ? columns.join(',') : '*';

  const [rows] = await db.query(`
    SELECT ${sqlColumns}
    FROM users 
  `);

  return rows;
};

exports.findByEmail = async email => {
  const [rows] = await db.query(
    `
  SELECT * 
  FROM users
  WHERE email=? 
  LIMIT 1
  `,
    [email]
  );
  return rows.length === 1 ? rows[0] : null;
};

exports.create = async userData => {
  const hashedPassword = hashService.hashPassword(userData.password);
  const updatedUserData = { ...userData, password: hashedPassword };
  const [result] = await db.query(`INSERT INTO users SET ?`, [updatedUserData]);
  return result.insertId;
};

exports.update = async (userID, updateFields) => {
  const hashedPassword = hashService.hashPassword(updateFields.password);
  const updatedUserData = { ...updateFields, password: hashedPassword };
  const [result] = await db.query(`UPDATE users SET ? WHERE id=? LIMIT 1`, [updatedUserData, userID]);
  return result.affectedRows > 0;
};

exports.delete = async userID => {
  const [result] = await db.query(`DELETE FROM users WHERE id=? LIMIT 1`, [userID]);
  return result.affectedRows > 0;
};
