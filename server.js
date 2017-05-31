//Instanciation des modules
var express = require('express');
var http = require('http');
var url = require('url');
var mysql = require('mysql');
var connection = require('./connection.js');
var Query = require('./Class/Query.js');

//Routes à utiliser selon les requêtes
app.use('/inscription', registerRoute);
app.use('/getMulti', getMultiRoute);

//Serveur http
var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;

    res.end();
});

server.listen(8000);