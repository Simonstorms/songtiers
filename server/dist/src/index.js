"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./routes"));
//Connects to the Database -> then starts the express
const port = process.env.PORT || 8000;
exports.app = (0, express_1.default)();
//connect database
database_1.default
    .initialize()
    .then(() => {
    console.log("Database connected");
})
    .catch((err) => {
    console.log(err);
});
//middleware
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
exports.app.use((0, helmet_1.default)());
exports.app.use("/", routes_1.default);
exports.app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
