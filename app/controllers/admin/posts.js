const { helpers } = require('handlebars');
const postModels =require('../../models/posts');  
const userModels = require('../../models/user');
const { param, post } = require('../../routes/admin/posts');
const datePersian = require('../../services/dateServices');
const postValidator = require('../../validators/post');

exports.index =async (req,res)=>{
    const posts = await postModels.findall();
    const presentedPosts = posts.map(post =>{
        post.created_at_persian = datePersian.toPersianDate(post.created_at_persian);
        return post;
    })
     res.render('admin/posts/index',{posts : presentedPosts});
 };

 exports.create = async (req,res)=>{
    const users = await userModels.findall(['id','full_name']);
    res.render('admin/posts/create', {users , errors:[],hasError:0});
 };
 exports.store = async (req,res)=>{
    const postData = {
        titel: req.body.titel,
        author_id : req.body.author,
        slug : req.body.slug,
        content : req.body.content,
        status:req.body.status
    };
    const errors = postValidator.create(postData);
    if (errors.length > 0) {
        const users = await userModels.findall(['id','full_name']);
       return res.render('admin/posts/create', {users , errors , hasError : errors.length>0});
     } 
    const insertId = await postModels.create(postData);
    if(insertId){
        res.redirect('/admin/posts');
    };
 };

 exports.remove = async (req,res)=>{
    const postID = req.params.postID;
    if(parseInt(postID) === 0){
        res.redirect('/admin/posts');
    };
    const result = await postModels.delete(postID);
    res.redirect('/admin/posts');
 };

 exports.edit = async(req,res)=>{
    const postID = req.params.postID;
    if(parseInt(postID) === 0){
        res.redirect('/admin/posts');
    }
    const post = await postModels.find(postID);
    const users = await userModels.findall(['id','full_name']);
    res.render('admin/posts/edit', {users , errors:[],hasError:0,post});
 };

 exports.update = async(req,res)=>{
    const postID = req.params.postID;
    if(parseInt(postID) === 0){
        res.redirect('/admin/posts');
    };
    const postData = {
        titel: req.body.titel,
        author_id : req.body.author,
        slug : req.body.slug,
        content : req.body.content,
        status:req.body.status
    };
    const result = await postModels.update(postID , postData);
    res.redirect('/admin/posts');
 }