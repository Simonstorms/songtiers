"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const checkJwt_1 = require("../middlewares/checkJwt");
const router = (0, express_1.Router)();
//Login route
router.post("/login", AuthController_1.default.login);
//Change my password
router.post("/change-password", [checkJwt_1.checkJwt], AuthController_1.default.changePassword);
exports.default = router;
