
import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

//For env File
dotenv.config();
const cors = require("cors")
const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.get('/api/home', (req, res) => {

    res.json({message: "Hello Simon"});
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});