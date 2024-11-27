"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const dotenv_1 = __importDefault(require("dotenv"));
const Song_1 = require("../entity/Song");
const UserSongTier_1 = require("../entity/UserSongTier");
dotenv_1.default.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
const datasource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.NODE_ENV === "test"
        ? `${process.env.POSTGRES_DB}_test`
        : process.env.POSTGRES_DB,
    entities: [User_1.User, Song_1.Song, UserSongTier_1.UserSongTier],
    synchronize: true,
});
exports.default = datasource;
