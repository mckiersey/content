const mysql = require('mysql');


// SET DATABASE CONNECTION CREDENTIALS

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodelogin'
};


//var connection = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: 'root',
//    database: 'nodelogin'
//});

// A MYSQL POOL ALLOWS FOR MULTIPLE CONNECTIONS AT ONCE

const pool = mysql.createPool(config);

// EXPORT THE POOL SO THAT IT CAN BE USED BY THE APP

module.exports = pool;

