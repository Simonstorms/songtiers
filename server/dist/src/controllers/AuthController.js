"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entity/User");
const dotenv = __importStar(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getDataSource_1 = require("../utils/getDataSource");
dotenv.config();
const secret = process.env.JWT_SECRET;
function hashPassword(password) {
    return bcryptjs_1.default.hashSync(password, 9);
}
class AuthController {
}
_a = AuthController;
AuthController.signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = (0, getDataSource_1.getDataSource)();
    const data = req.body;
    // Check if the username or email already exists in the database
    const existingUser = yield db
        .getRepository(User_1.User)
        .createQueryBuilder("user")
        .where("user.email = :email", { email: data.email })
        .getOne();
    if (existingUser) {
        res.status(400).send({ message: "Email already exists" });
        return;
    }
    // If username and email are unique, proceed with creating the new user
    let hash = hashPassword(data.password);
    const user = yield db
        .createQueryBuilder()
        .insert()
        .into(User_1.User)
        .values([
        {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: hash,
        },
    ])
        .execute();
    // sign jwt, valid for 1 hour
    const token = jsonwebtoken_1.default.sign({ userId: user.identifiers[0].id, firstname: data.firstname }, secret, { expiresIn: "1d" });
    // send the jwt in the response
    res.send({ token: token, userId: user.identifiers[0].id });
});
AuthController.signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const db = (0, getDataSource_1.getDataSource)();
    // Attempt to retrieve the user by username or email
    const user = yield db
        .getRepository(User_1.User)
        .createQueryBuilder("user")
        .where("user.email = :email", { email })
        .getOne();
    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }
    // Check if the password matches
    const isValid = bcryptjs_1.default.compareSync(password, user.password);
    if (!isValid) {
        return res.status(401).send({ message: "Invalid credentials" });
    }
    // If valid, sign the JWT
    const token = jsonwebtoken_1.default.sign({ userId: user.id, firstname: user.firstname }, secret, { expiresIn: "1d" });
    // Send the JWT to the user
    res.send({ token: token, userId: user.id });
});
AuthController.getuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer Token
    if (token == null)
        return res.sendStatus(401); // If no token, unauthorized
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        res.send({ userId: decoded.userId });
    }
    catch (err) {
        return res.sendStatus(403); // Invalid token
    }
});
exports.default = AuthController;
