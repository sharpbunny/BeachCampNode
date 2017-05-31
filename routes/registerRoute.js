//Instanciation des modules

var express = require('express');
var registerRouter = express.Router();

registerRouter.route('/')

/**
 * On récupère le JSON du formulaire d'inscription et on regarde
 * si le pseudo existe déjà dans la base de données
 */
.get(function(req, res, next) {

});