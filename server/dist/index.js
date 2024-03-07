"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//For env File
dotenv_1.default.config();
const cors = require("cors");
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(cors());
app.get('/api/home', (req, res) => {
    res.json({ message: "Hello Simon" });
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
