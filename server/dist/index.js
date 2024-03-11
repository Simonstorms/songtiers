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
// For env File
dotenv_1.default.config();
const client = new pg_1.Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: parseInt(process.env.POSTGRES_PORT),
});
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// Register endpoint
app.post("/auth/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
}));
// Start the server
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    console.log('sdfsdgf');
    console.log(`Server is running at http://localhost:${port}`);
}));
