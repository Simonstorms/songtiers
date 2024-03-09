import express, { Express } from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcryptjs';

// For env File
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// Configure MySQL connection
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error: mysql.MysqlError | null) => {
    if (error) {
        console.error('Database connection failed:', error);
    } else {
        console.log('MySQL connected successfully.');
    }
});

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Register endpoint
app.post("/auth/register", async (req, res) => {
    const { name, email, password, password_confirm } = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }

        if (results.length > 0) {
            return res.render('register', {
                message: 'This email is already in use'
            });
        } else if (password !== password_confirm) {
            return res.render('register', {
                message: 'Passwords do not match!'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        db.query('INSERT INTO users SET ?', { name: name, email: email, password: hashedPassword }, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                return res.render('register', {
                    message: 'User registered!'
                });
            }
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
