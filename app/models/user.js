const db = require('../../database/mysql');
const hashPassword = require('../services/hashServices');

exports.findall = async (columns = [])=>{
    const sqlcolumns = columns.length > 0 ? columns.join(',') : '*' ;
    const [row,fields] = await db.query(`
    SELECT ${sqlcolumns} 
    FROM users
    `);
    return row;
};
exports.findbyEmail = async (email)=>{
    const [row] = await db.query(`
    SELECT * 
    FROM users
    WHERE email=?
    LIMIT 1 
    `,[email]);
    return row.length === 1 ? row[0]:null;
};
exports.create = async (userData)=>{
    const hashedPassword = hashPassword.hashPassword(userData.password);
    const updatedUserData = {...userData , password:hashedPassword};
    const [result] = await db.query(`INSERT INTO users SET ?`,[updatedUserData]);
    return result.insertId;
};
exports.delete = async (userData)=>{
    const [result] = await db.query(`DELETE FROM users WHERE id=? LIMIT 1`,[userData]);
    return result.affectedRows > 0;
};

