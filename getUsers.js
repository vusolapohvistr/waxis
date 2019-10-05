const mysql = require('mysql');

function getUsers() {
    return new Promise((resolve, reject) => {
        const con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '12345',
            port: 3306,
            database: 'db',
        });

        con.connect(err => {
            if (err) {
                con.end();
                reject(err);
            } else {
                con.query('SELECT id, username, email FROM users ORDER BY id DESC LIMIT 10', (err, value) => {
                    if (err) {
                        con.end();
                        reject(err);
                    }
                    else {
                        resolve(value);
                    }
                    con.end();
                });
            }
        });
    });
}

getUsers().then(res => console.log(res)).catch(err => console.log(err.message));

