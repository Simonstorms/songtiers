"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const pg_1 = require("pg");
const multer_1 = __importDefault(require("multer"));
// Initialize environment variables
dotenv_1.default.config();
const client = new pg_1.Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: parseInt(process.env.POSTGRES_PORT || '5432'), // Provide a default port if not specified
});
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
const upload = (0, multer_1.default)({ dest: 'uploads/' });
// Middleware
app.use((0, cors_1.default)());
app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        console.log('File received:', req.file);
        res.status(200).send('File uploaded successfully');
    }
    else {
        res.status(400).send('No file uploaded');
    }
});
// Start the server
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        console.log('Connected to the database successfully.');
        // Example query
        const result = yield client.query("SELECT * FROM test");
        if (result.rows.length > 0) {
            console.log(result.rows[0].message);
        }
        console.log(`Server is running at http://localhost:${port}`);
    }
    catch (err) {
        console.error('Database connection failed', err);
        process.exit(1); // Exit the process if the database connection fails
    }
}));
