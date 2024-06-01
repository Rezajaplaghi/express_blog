const userModels = require('../models/user');
const hashPassword = require('../services/hashServices');
const userRole = require('../models/userRols');

exports.login = async (email,plainPassword)=>{
    const user = await userModels.findbyEmail(email);
    if(!user){
        return false;
    };
    const {password} = user;
    return hashPassword.comparePassword(plainPassword,password) ? user : false;
};
exports.register = async (email,password)=>{

    const insertId = await userModels.create({
        full_name :'',
        email ,
        password ,
        role : userRole.USER,
    });
    return insertId;
};