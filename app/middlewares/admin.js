const userRole = require('../models/userRols');
module.exports = (req,res,next)=>{
    if(req.session.user.role !== userRole.ADMIN){
        return res.redirect('/');
    };
    next();

};

    

