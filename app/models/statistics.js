const db = require('../../database/mysql');
exports.totalUser = async ()=>{
    const [result] = await db.query('SELECT COUNT(id) as totalUser FROM users');
    return result[0].totalUser;
};
exports.totalComment = async ()=>{
    const [result] = await db.query('SELECT COUNT(id) as totalComment FROM comments');
    return result[0].totalComment;
};
exports.totalPost = async ()=>{
    const [result] = await db.query('SELECT COUNT(id) as totalPost FROM posts');
    return result[0].totalPost;
};
exports.totalViews = async ()=>{
    const [result] = await db.query('SELECT SUM(views) as totalViews FROM posts');
    return result[0].totalViews;
};