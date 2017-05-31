//Instanciation des modules
var bodyParser = require('body-parser');
var connection = require('../connection.js');
var express = require('express');
var userRouter = express.Router();

console.log("Je suis dans userRoute");

userRouter.route('/')

.get(function(req, res, next) {
    res.end("Le get des gitans");
})

/**
 * Poste le json à la base de données du formulaire d'inscription.
 * In fine, on ajoute un nouvel utilisateur dans la bdd.
 */
.post(function(req, res, next) {
    var pseudo = req.body.pseudoUtilisateur;
    //Requête pour voir si il existe dans la bdd
    res.end(pseudo);
});

module.exports = userRouter;