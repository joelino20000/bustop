const express = require ("express")
const connection= require("./database/connection")

//conexion a db
connection();

//crear servidor node

const app = express();
const puerto = 3900;

//poner servidor a escuchar peticiones http

app.listen(puerto)
