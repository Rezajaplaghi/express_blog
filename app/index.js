const express =require('express');
const session = require('express-session');
const app = express();
app.use(session({
    secret:"aaaaa",
    saveUninitialized:true,
    resave:false,
    cookie:{secure:true}
}));

require('./bootstrap')(app);
require('./routes')(app);



module.exports=()=>{
    const port = process.env.APP_PORT;
    app.listen(port,()=>{
        console.log(`app is run ${port}`);
    });
}