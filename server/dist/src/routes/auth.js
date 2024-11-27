"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/signup', AuthController_1.default.signup);
router.post('/signin', AuthController_1.default.signin);
router.post('/getuser', AuthController_1.default.getuser);
exports.default = router;
