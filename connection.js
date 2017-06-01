/**
 * FR : Module permettant de se connecter à la base de données
 * EN : Module to connect to mysql database
 */

var mysql = require('mysql');

/**
 * Méthode permettant d'ouvrir une connection à la base de données
 */
function Connection() {
    this.pool = null;

    this.init = function() {
        this.pool = mysql.createPool({
            connectionLimit: 1000,
            aquireTimeout   : 60 * 60 * 1000,
            host: 'localhost',
            user: 'admin',
            password: 'Admin254',
            timeout : 60 * 60 * 1000,
            database: 'beachcamp',
            connection: 'nodeBeach'
           
        });
    };

    this.acquire = function(callback) {
        this.pool.getConnection(function(err, connection) {
            callback(err, connection);
        });
    };
}

module.exports = new Connection();

/**
On utilise la méthode createPool plutôt que la méthode createConnexion
car elle permet d'ouvrir plusieurs connexions simultanément contrairement 
à la méthode createConnexion.
*/