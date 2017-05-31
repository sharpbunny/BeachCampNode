//Instanciation des modules
var connection = require('../connection.js');
var express = require('express');
var registerRouter = express.Router();

registerRouter.route('/')

/**
 * On récupère le JSON du formulaire d'inscription et on regarde
 * si le pseudo existe déjà dans la base de données
 */
.get(function(req, res, next) {

})

/**
 * Poste le json à la base de données du formulaire d'inscription.
 * In fine, on ajoute un nouvel utilisateur dans la bdd.
 */
.post(function(req, res, next) {

});