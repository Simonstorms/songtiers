
import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';



//For env File
dotenv.config();
const mysql = require("mysql")
const cors = require("cors")
const app: Application = express();
const port = process.env.PORT || 8000;

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

db.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
})

const bcrypt = require("bcryptjs")



app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});