//Instanciation des modules
var connection = require('../connection.js');
var express = require('express');
var pseudoExiste;

function User(){
    //Permet de sélectionner un utilisateur dans la base de données
    this.selectUser = function(res, pseudo) 
    {
        console.log(pseudo);
        connection.acquire(function(err, con) 
        {
            con.query('select pseudoUtilisateur from utilisateur where pseudoUtilisateur = "Kikounette"', function(err, result) 
            {
                if(err){
                    pseudoExiste = false;
                }

                else{
                    pseudoExiste = true;
                }
                con.release();
                res.send({status : 0, users : result});
            });
        });
    };

    //Permet d'insérer un utilisateur dans la base de données
    this.insertUser = function(res, utilisateur) 
    {
        connection.acquire(function(err, con) 
        {
            console.log(utilisateur);
            con.query('INSERT INTO utilisateur SET à la maison', function(err, result) 
            {
                con.release();
                res.send({status : 0, users : result});
            });
        });
    };

} //fin User()

module.exports = new User();