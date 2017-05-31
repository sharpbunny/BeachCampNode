//Instanciation des modules
var express = require ('express');
var http = require('http');
var url = require('url');
var mysql = require('mysql');
var connexionDB = require('./Class/ConnexionDB.js');
var Query = require('./Class/Query.js');


//Serveur http
var server = http.createServer(function(req, res){
    var page = url.parse(req.url).pathname;
    switch(page){
        
        //Permet de tester si les identifiants de l'utilisateur lors de la connexion sont corrects
        case '/connexion':
           var connection = connexionDB.connectionDatabase();
           Query.connexionUtilisateur(connection);
           connection.end();
        break;
        
        //Permet de procéder à l'inscription d'un utilisateur
        case '/inscription':

        break;

        //Obtiens tous les multis autour de lui
        case '/getMulti':
        break;

        //Créer un multi
        case '/addMulti':
        break;

        //Modifier son profil
        case '/setProfile':
        break;

        case '/insertLevel':
            var niveau = {
                idNiveau : 5,
                nomNiveau : "Benjamin",
                experience : 1000
            };

            var connection = connexionDB.connectionDatabase();
            Query.insertionNiveau(connection, niveau);

        break;

        //Par défaut
        default:

        break;
    }
    

    res.end();
});

server.listen(8000);

