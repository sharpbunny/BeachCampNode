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
            if(err){
                console.log("Fatal Connection Error! Select query!");
                throw err;
            }

            else{
                console.log("No connection error during select query");
            con.query('select pseudoUtilisateur from utilisateur where pseudoUtilisateur', pseudo, function(err, result) 
            {
                if(err){
                    pseudoExiste = false;
                    console.log("Fatal Select Query Error!");
                    throw err;
                }

                else{
                    pseudoExiste = true;
                    console.log("No error for select query");
                }
                con.release();
                res.end("Utilisateur selectionné dans la bdd");
            });
            }

        });
    };

    //Permet d'insérer un utilisateur dans la base de données
    this.insertUser = function(res, utilisateur) 
    {
        connection.acquire(function(err, con) 
        {
            if(err){
                console.log("Fatal Connection Error!");
            }

            else{
            console.log(utilisateur);
            con.query('INSERT INTO utilisateur SET ?', utilisateur, function(err, result) 
            {
                if(err){
                    console.log("Fatal Query Error");
                    throw err;
                }

                else{
                    console.log("No error for insert into user");
                }
                con.release();
                res.end("Utilisateur inséré dans la bdd");
            });
            }
        });
    };

} //fin User()

module.exports = new User();