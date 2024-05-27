const commentModels = require('../../models/comments');
const datePersian = require('../../services/dateServices');

exports.index = async (req ,res)=>{
    const comments = await commentModels.findall();
    const presentedPosts = comments.map(post =>{
        post.created_at_persian = datePersian.toPersianDate(post.created_at_persian);
        return post;
    });
    res.render('admin/comments/index',{comments : presentedPosts});
};
exports.approve = async (req, res)=>{
    const commentID = req.params.commentID;
    const result = await commentModels.approve(commentID);
    res.redirect('/admin/comments');
};
exports.reject = async (req, res)=>{
    const commentID = req.params.commentID;
    const result = await commentModels.reject(commentID);
    res.redirect('/admin/comments');
};
exports.delete = async (req, res)=>{
    const commentID = req.params.commentID;
    const result = await commentModels.delete(commentID);
    res.redirect('/admin/comments');
};