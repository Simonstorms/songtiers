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
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env.test" });
function setupTestDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: "postgres",
        });
        try {
            yield client.connect();
            const dbName = `${process.env.POSTGRES_DB}_test`;
            const res = yield client.query(`SELECT 1 FROM pg_database WHERE datname = $1`, [dbName]);
            if (res.rows.length === 0) {
                yield client.query(`CREATE DATABASE ${dbName}`);
                console.log(`Database ${dbName} created successfully`);
            }
        }
        catch (error) {
            console.error("Error setting up test database:", error);
            throw error;
        }
        finally {
            yield client.end();
        }
    });
}
// Run if this file is executed directly
if (require.main === module) {
    setupTestDatabase()
        .then(() => process.exit(0))
        .catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
exports.default = setupTestDatabase;
