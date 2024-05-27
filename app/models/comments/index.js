const db = require('../../../database/mysql');
const commentstatus = require('./commentstatus');

exports.find = async (postID)=>{
    const [rows,fields] = await db.query(`
    SELECT p.*,u.full_name 
    FROM posts p
    JOIN users u ON p.author_id=u.id
    WHERE p.id=? LIMIT 1
    `,[postID]);
    return rows.length > 0 ? rows[0] : false;
};

exports.findall = async ()=>{
    const [row,fields] = await db.query(`
    SELECT c.*,p.titel 
    FROM comments c
    JOIN posts p ON c.post_id=p.id
    ORDER BY c.created_at DESC 
    `);
    return row;
};

exports.create = async (postdata)=>{
    const [result] = await db.query(`INSERT INTO posts SET ?`,[postdata]);
    return result.insertId;
};

exports.delete = async (commentID)=>{
    const [result] = await db.query(`DELETE FROM comments WHERE id=? LIMIT 1`,[commentID]);
    return result.affectedRows > 0;
};

exports.update = async (postID , updateFilds)=>{
    const [result] = await db.query(`UPDATE posts SET ? WHERE id=? LIMIT 1`,[ updateFilds ,postID]);
    return result.affectedRows > 0;
};

exports.approve = async (commentID)=>{
    const [result] = await db.query(`UPDATE comments SET status=? WHERE id=? LIMIT 1`,[commentstatus.APPROVED,commentID]);
    return result.affectedRows > 0;
};

exports.reject = async (commentID)=>{
    const [result] = await db.query(`UPDATE comments SET status=? WHERE id=? LIMIT 1`,[commentstatus.REJECTED,commentID]);
    return result.affectedRows > 0;
};