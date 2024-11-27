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
const app_1 = require("../../src/app");
const supertest_1 = __importDefault(require("supertest"));
describe("Authentication API", () => {
    const endpoint = "/auth/signup";
    const validUserData = {
        firstname: "Test",
        lastname: "User",
        email: "test@example.com",
        password: "password123",
    };
    const registerUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, supertest_1.default)(app_1.app).post(endpoint).send(userData);
    });
    it("should register a new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield registerUser(validUserData);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("token");
        expect(response.body).toHaveProperty("userId");
    }));
    it("should not register a user with existing email", () => __awaiter(void 0, void 0, void 0, function* () {
        // Register user the first time
        yield registerUser(validUserData);
        // Attempt to register with the same email again
        const response = yield registerUser(validUserData);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message", "Email already exists");
    }));
});
