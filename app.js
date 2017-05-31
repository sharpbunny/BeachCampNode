//Instanciation des modules
var bodyParser = require('body-parser');
var express = require('express');
var http = require('http');
var url = require('url');
var mysql = require('mysql');
var connection = require('./connection.js');
var app = express(); 

//Les Routes
var userRoute = require('./routes/userRoute');
var getMultiRoute = require('./routes/getMultiRoute');
var routes = require('./routes/indexRoute');



connection.init();

//Récupérer le json
app.use(bodyParser.json({limit: '50 mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//Routes à utiliser selon les requêtes
app.use('/', routes);
app.use('/utilisateur', userRoute);
app.use('/getMulti', getMultiRoute);

//Nécessaire pour que le fichier www puisse lancer le serveur avec le app.set
module.exports = app;
