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
            connectionLimite: 5,
            host: 'localhost',
            user: 'admin',
            password: 'Admin254',
            database: 'beachcamp'
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