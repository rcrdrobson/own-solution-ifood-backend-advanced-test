var express = require("express");
var bodyParser = require("body-parser");
var server = express();
var port = 9090;

server.use(bodyParser.urlencoded({ extended:true }));
server.use(bodyParser.json());

server.listen(port, function(){ console.log("Started at port "+port) });

exports.server = server;