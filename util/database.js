const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'visitantes',
    password: 'm0t1t4_05'
});

module.exports = pool.promise();