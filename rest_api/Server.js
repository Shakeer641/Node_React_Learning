const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const asyncRequest = require ('async-Request');
const { ROUTE_CONTSTANTS } = require('./route_constants');
const countrylistURL = 'https://restcountries.eu/rest/v2/all';


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//route, callback function.

app.get(ROUTE_CONTSTANTS.DEFAULT,function (req,res){
    res.send("<h1>Welcome to Pega!!!");

});

app.get(ROUTE_CONTSTANTS.GET_LOGIN,function (req,res){
    res.sendFile(__dirname+'/pages/login.html');
});
app.post(ROUTE_CONTSTANTS.POST_LOGIN, function(req,res){
    console.log(req.body);
    res.send("Login Successful");
});

app.get(ROUTE_CONTSTANTS.GET_REGISTER,function (req,res){
    res.sendFile(__dirname+'/pages/register.html');
});

app.post(ROUTE_CONTSTANTS.POST_REGISTER, function(req,res){
    console.log(req.body);
    res.send("Registration Successful");
});

app.get(ROUTE_CONTSTANTS.GET_PRODUCTS,function (req,res){
    res.send("<h1>Products Page</h1>");
});

app.get(ROUTE_CONTSTANTS.GET_COUNTRIES, async function(req,res){
    const response = await asyncRequest(countrylistURL);
    res.json(response);
})
app.listen(3000);