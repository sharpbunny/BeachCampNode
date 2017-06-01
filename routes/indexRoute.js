/*Déclaration des modules et variables*/

var express = require('express');
var indexRouter = express.Router();

indexRouter.get('/', function(req, res, next){
    res.end('BeachCampNode is on like Donkey Kong!');
});

module.exports = indexRouter;
