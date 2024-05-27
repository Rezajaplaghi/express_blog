const userModels = require('../../models/user');
const userValidator = require('../../validators/user');


exports.index =async (req,res)=>{
    const users = await userModels.findall();
     res.render('admin/users/index',{users});
 };

 exports.create = async (req,res)=>{
    res.render('admin/users/create', {errors:[],hasError:0});
 };
 exports.store = async (req,res)=>{
    const userData = {
        full_name: req.body.full_name,
        email : req.body.email,
        password : req.body.password,
        role : req.body.role
    };
    const errors = userValidator.create(userData);
    if (errors.length > 0) {
       return res.render('admin/users/create', {errors , hasError : errors.length>0});
     }; 
    const insertId = await userModels.create(userData);
    if(insertId){
        res.redirect('/admin/users');
    };
 };

 exports.remove = async (req,res)=>{
    const userID = req.params.userID;
    if(parseInt(userID) === 0){
        res.redirect('/admin/users');
    };
    const result = await userModels.delete(userID);
    res.redirect('/admin/users');
 };

