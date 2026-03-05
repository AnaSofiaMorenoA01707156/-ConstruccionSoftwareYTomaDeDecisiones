const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'visitantes',
    password: ''
});

module.exports = pool.promise();