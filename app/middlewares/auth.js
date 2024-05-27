const userRole = require('../models/userRols');
module.exports = (req,res,next)=>{

    if(!req.session.hasOwnProperty('user')){
        return res.redirect('/');
    };
    if(req.session.user.role !== userRole){
        return res.redirect('/');
    };
    next();

};

   

