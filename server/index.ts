import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Client } from 'pg';
import multer from 'multer';

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
const upload = multer({ dest: 'uploads/' });

// Middleware
app.use(cors());

app.post('/upload', upload.single('file'), (req: Request, res: Response) => {
    if (req.file) {
        console.log('File received:', req.file);
        res.status(200).send('File uploaded successfully');
    } else {
        res.status(400).send('No file uploaded');
    }
});

// Start the server
app.listen(port, async () => {
    try {
        await client.connect();
        console.log('Connected to the database successfully.');

        // Example query
        const result = await client.query("SELECT * FROM test");
        if (result.rows.length > 0) {
            console.log(result.rows[0].message);
        }

        console.log(`Server is running at http://localhost:${port}`);
    } catch (err) {
        console.error('Database connection failed', err);
        process.exit(1); // Exit the process if the database connection fails
    }
});
