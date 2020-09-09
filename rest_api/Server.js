const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { ROUTE_CONTSTANTS } = require('./route_constants');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//route, callback function.

app.get(ROUTE_CONTSTANTS.DEFAULT,function (req,res){
    res.send("<h1>Welcome to Pega");

});

app.get(ROUTE_CONTSTANTS.GET_LOGIN,function (req,res){
    res.sendFile(__dirname+'/pages/login.html');
});

app.get(ROUTE_CONTSTANTS.GET_REGISTER,function (req,res){
    res.send("Registration");
});

app.get(ROUTE_CONTSTANTS.GET_PRODUCTS,function (req,res){
    res.send("<h1>Products Page</h1>");
});

app.post(ROUTE_CONTSTANTS.POST_LOGIN, function(req,res){
    console.log(req.body);
    res.send("Login");
});



app.listen(3000);