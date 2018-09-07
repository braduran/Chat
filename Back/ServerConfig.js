const express = require('express')();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require('multer')();

express.use(cookieParser());
express.use(bodyParser.json());
express.use(bodyParser.urlencoded({extended: true}));
express.use(multer.array());

express.listen(3001, ()=>{
    console.log("Server listen port 3001...");
});

module.exports = express;