const session = require('express-session');
const authServices = require('../../services/authServices');
const userRole = require('../../models/userRols');
exports.showlogin = (req,res)=>{

    res.render('auth/login');

};
exports.dologin = async(req,res)=>{
    const {email , password} = req.body;
    const user = await authServices.login(email,password);
    if(!user){
        res.redirect('auth/login');
    };
    req.session.user = user;
    const pathTored = user.role === userRole.ADMIN ? '/admin/dashbord' : '/' ;
    return res.redirect(pathTored);
};
exports.showregister = (req,res)=>{

    res.render('auth/register');

};
exports.doregister = async(req,res)=>{

    const {email , password,password_confirmation} = req.body;
    const newUserId = await authServices.register(email,password);
    if(!newUserId){
        req.flash('errors',['در حال حاضر ثبت نام شما وجود ندارد']);
        return res.redirect('/auth/register');
    };
    return res.redirect('/auth/login');

};