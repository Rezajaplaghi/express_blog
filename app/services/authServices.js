const userModels = require('../models/user');
const hashPassword = require('../services/hashServices');
exports.login = async (email,plainPassword)=>{
    const user = await userModels.findbyEmail(email);
    if(!user){
        return false;
    };
    const {password} = user;
    return hashPassword.comparePassword(plainPassword,password) ? user : false;
};