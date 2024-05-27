const db = require('../../database/mysql');

exports.findall = async (columns = [])=>{
    const sqlcolumns = columns.length > 0 ? columns.join(',') : '*' ;
    const [row,fields] = await db.query(`
    SELECT ${sqlcolumns} 
    FROM settings 
    `);
    return row;
};
exports.update = async (updateFilds)=>{
    const [result] = await db.query(`UPDATE posts SET ? WHERE id=? LIMIT 1`,[ updateFilds ,postID]);
    return result.affectedRows > 0;
};

