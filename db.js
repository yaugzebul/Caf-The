// Permet de configurer le pool de connexion à mySQL
const mysql = require('mysql2/promise'); // pour faire des requêtes asynchrones async/await
require('dotenv').config();

// Pool de connexion
// Permet de gérer plusieurs connexion simultannées
// Réutiliser des connexions existantes
// Gestion auto de la disponibilité de la bdd
// Limiter le nb de connexion (simultannées)

const db = mysql.createPool( {
    // Paramètres de connexion (host, nom utilisateur, mot de passe, nom de la BDD)
host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME

    // PARAMETRES DU POOL
    // Si plus de connexion dispo, alors elles attendent
    waitForConnections:true,
    // Limiter le nb max de connexion
    connectionLimit:10

    // PARAMETRES OPTIONNELS mais recommandés
    // En cas d'échec de connexion, réessayer
    enableKeepAlive:true,
    keepAliveInitialDelay:0,
    // Timeout de connexion de 10 sec
    connectTimeout:10000, // 10 secondes
});


module.exports = db;