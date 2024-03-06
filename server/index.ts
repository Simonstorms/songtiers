
import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {

    res.send(`URL is: Home`);
});
app.get('/about', (req, res) => {

    res.send(`URL is: About`);
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});