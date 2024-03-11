import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcryptjs';

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
app.post("/auth/register", async (req, res) => {
    const { name, email, password, password_confirm } = req.body;

    // db.query('SELECT email FROM useyrs WHERE email = ?', [email], async (error, results) => {
    //     if (error) {
    //         console.log(error);
    //     }
    //
    //     if (results.length > 0) {
    //         return res.render('register', {
    //             message: 'This email is already in use'
    //         });
    //     } else if (password !== password_confirm) {
    //         return res.render('register', {
    //             message: 'Passwords do not match!'
    //         });
    //     }
    //
    //     let hashedPassword = await bcrypt.hash(password, 8);
    //     db.query('INSERT INTO users SET ?', { name: name, email: email, password: hashedPassword }, (err, results) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             return res.render('register', {
    //                 message: 'User registered!'
    //             });
    //         }
    //     });
    // });
});

// Start the server
app.listen(port, async() => {
    await client.connect()
    const dongs = await client.query("SELECT * FROM test")
    if (dongs.rows.length > 0 ) {
        console.log(dongs.rows[0].message)
    }
    console.log(`Server is running at http://localhost:${port}`);
});
