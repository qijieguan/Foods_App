const express = require('express');
const app = express();
const mysql = require("mysql");
const path  =  require('path');
const cors = require('cors');
require('dotenv').config();

const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

app.use(cors());

app.use(express.json()); 

const db = mysql.createConnection({
    host: process.env.HOST_VAL, 
    user: process.env.USER_VAL,
    password: process.env.PASSWORD_VAL,
    database: process.env.DATABASE_VAL 
}); 

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});
