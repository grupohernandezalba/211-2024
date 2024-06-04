const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql");

let connection;

try {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
}
catch(error) {
    console.log(error);
}

module.exports = { connection }