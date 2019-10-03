const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    port: 3306,
    database: 'db',
});

con.connect((err) => {
    if (err) console.log(err);
    console.log('Connected!');
    con.query('CREATE DATABASE db', (err, res) => {
        if (err) console.log(err.message);
        else console.log('Created!');
    });
    con.query('CREATE TABLE users (id MEDIUMINT NOT NULL AUTO_INCREMENT,' +
        'username VARCHAR(50) NOT NULL,' +
        'email VARCHAR(50) NOT NULL,' +
        'PRIMARY KEY(id))', (err) => err ? console.log(err.message) : '');
    con.end();
});
