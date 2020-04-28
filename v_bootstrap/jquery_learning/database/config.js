const mysql = require('mysql');

//Database connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'api',
};

//Create pool

const pool = mysql.createPool(config);


// Export
module.exports = pool;
