import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Client } from 'pg';

// Initialize environment variables
dotenv.config();

const client = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: parseInt(process.env.POSTGRES_PORT || '5432'), // Provide a default port if not specified
});

const app: Express = express();
const port = process.env.PORT || 8000;
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Simons application." });
});

// set port, listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});





