var express = require("express");
var bodyParser = require("body-parser");
var server = express();
var port = 9090;

server.use(bodyParser.urlencoded({ extended:true }));
server.use(bodyParser.json());

server.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Content-Type', “application/json");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

server.listen(port, function(){ console.log("Started at port "+port) });

exports.server = server;