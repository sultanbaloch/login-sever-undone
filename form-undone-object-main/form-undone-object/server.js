 var users = [{
    name : "ahmer",
    email: "ahmer@gmail.com",
    password : "123",
}]
 
 
var express = require("express");
var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json())

app.post("/signup", (req,res,next) =>{
    
    
    console.log(req.body);


    res.send("signup success full");
});
app.post("/login", (req,res,next) =>{

    var userEmail =
    var userPassword
    
    if (var i =0; i<users.length; i++;){



    }
    
    console.log(req.body);


    res.send("login success full");
});
app.listen(3000, function(){
    console.log("server is running");
});
