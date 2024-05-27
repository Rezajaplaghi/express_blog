const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
module.exports = app =>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.set('view engine','ejs');
    app.set('views', path.join(__dirname,'../views'));
    app.use('/static',express.static(path.join(__dirname,'../../public')));
};