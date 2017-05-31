//Instanciation des modules
var bodyParser = require('body-parser');
var connection = require('../connection.js');
var getUser = require('../query/getUser');
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
    var utilisateur = req.body;
    console.log(utilisateur);
    var pseudoExiste = false;
    //Requête pour voir si il existe dans la bdd
    pseudoExiste = getUser.selectUser(res, pseudo);

    if(pseudoExiste){
        console.log("Ce pseudo existe déjà fdp!");
    }

    else{
        console.log("On part pour insertUser les enfants!");
        getUser.insertUser(res, req.body);
    }

});

module.exports = userRouter;