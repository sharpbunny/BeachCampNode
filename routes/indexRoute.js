/*Déclaration des modules et variables*/

var express = require('express');
var indexRouter = express.Router();

indexRouter.get('/', function(req, res, next){
    res.end('Suce une bite pour voir.');
});

module.exports = indexRouter;
