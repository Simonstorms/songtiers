"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const user_1 = __importDefault(require("./user"));
const routes = (0, express_1.Router)();
routes.use("/checkJWT", auth_1.default);
routes.use("/user", user_1.default);
exports.default = routes;
