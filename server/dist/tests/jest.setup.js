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
exports.testDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../src/entity/User");
const Song_1 = require("../src/entity/Song");
const UserSongTier_1 = require("../src/entity/UserSongTier");
const dotenv_1 = __importDefault(require("dotenv"));
process.env.NODE_ENV = "test";
dotenv_1.default.config({ path: ".env.test" });
exports.testDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: `${process.env.POSTGRES_DB}_test`,
    entities: [User_1.User, Song_1.Song, UserSongTier_1.UserSongTier],
    synchronize: true,
    dropSchema: true,
});
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    if (!exports.testDataSource.isInitialized) {
        yield exports.testDataSource.initialize();
    }
    yield exports.testDataSource.synchronize(true);
}));
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    if (exports.testDataSource.isInitialized) {
        yield exports.testDataSource.query('TRUNCATE TABLE "user_song_tier" CASCADE');
        yield exports.testDataSource.query('TRUNCATE TABLE "song" CASCADE');
        yield exports.testDataSource.query('TRUNCATE TABLE "user" CASCADE');
    }
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    if (exports.testDataSource.isInitialized) {
        yield exports.testDataSource.destroy();
    }
}));
