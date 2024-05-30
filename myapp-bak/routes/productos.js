const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const {connection} = require("../config.db");

const getProductos = (request, response) => {
    connection.query("SELECT * FROM tb_productos", 
    (error, results) => {
        if(error)
            throw error;
        response.status(200).json(results);
    });
};

//ruta
app.route("/productos")
.get(getProductos);

module.exports = app;