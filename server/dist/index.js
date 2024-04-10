"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
//Connects to the Database -> then starts the express
database_1.default.initialize().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});
const port = process.env.PORT || 8000;
// Create a new express application instance
const app = (0, express_1.default)();
// Call midlewares
app.get('/', (req, res) => {
    res.send('test');
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
