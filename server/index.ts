import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Client } from 'pg'

// For env File
dotenv.config();

const client = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: parseInt(process.env.POSTGRES_PORT!),
})

const app: Express = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Register endpoint


// Start the server
app.listen(port, async() => {
    await client.connect()
    const dongs = await client.query("SELECT * FROM test")
    if (dongs.rows.length > 0 ) {
        console.log(dongs.rows[0].message)
    }
    console.log(`Server is running at http://localhost:${port}`);
});
