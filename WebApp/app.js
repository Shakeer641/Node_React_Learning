//http module is used to work with http protocol

var http = require('http');

var requestlistener = function(req,res){
    if(req.url=='/register'){
        res.writeHead(200);
        res.end("<h1>Resgistration Page</h1>");
    }
    else if(req.url=='/login'){
        res.writeHead(200);
        res.end("<h1>Login Page</h1>");
    }
    else{
        res.writeHead(200);
        res.end("<h1>Home Page</h1>");
    }
    
}

var server = http.createServer(requestlistener);

server.listen("3000");