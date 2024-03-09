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
const mysql_1 = __importDefault(require("mysql"));
const cors_1 = __importDefault(require("cors"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// For env File
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Configure MySQL connection
const db = mysql_1.default.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
db.connect((error) => {
    if (error) {
        console.error('Database connection failed:', error);
    }
    else {
        console.log('MySQL connected successfully.');
    }
});
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// Register endpoint
app.post("/auth/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, password_confirm } = req.body;
    db.query('SELECT email FROM users WHERE email = ?', [email], (error, results) => __awaiter(void 0, void 0, void 0, function* () {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('register', {
                message: 'This email is already in use'
            });
        }
        else if (password !== password_confirm) {
            return res.render('register', {
                message: 'Passwords do not match!'
            });
        }
        let hashedPassword = yield bcryptjs_1.default.hash(password, 8);
        db.query('INSERT INTO users SET ?', { name: name, email: email, password: hashedPassword }, (err, results) => {
            if (err) {
                console.log(err);
            }
            else {
                return res.render('register', {
                    message: 'User registered!'
                });
            }
        });
    }));
}));
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
