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
describe("Song Management API", () => {
    let authToken;
    let userId;
    // Test song data
    const testSong = {
        songName: "Test Song",
        artist: "Test Artist",
        image: "test-image-url.jpg",
        position: 1,
    };
    const newSong = Object.assign(Object.assign({}, testSong), { songName: "Updated Song", artist: "Updated Artist" });
    // User data for signup
    const userData = {
        firstname: "Test",
        lastname: "User",
        email: "songtest@example.com",
        password: "password123",
    };
    // Function to sign up a user and get auth token
    function signupAndGetAuthToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const signupResponse = yield (0, supertest_1.default)(app_1.app)
                .post("/auth/signup")
                .send(userData);
            return signupResponse.body.token;
        });
    }
    // Function to add a song to the user's tier list
    function addSongToTierList(song, authToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.app)
                .post("/action/addsong")
                .set("Authorization", `Bearer ${authToken}`)
                .send(song);
            return response;
        });
    }
    // Function to read a song from the user's tier list
    function readSongFromTierList(position, authToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.app)
                .post("/action/readsong")
                .set("Authorization", `Bearer ${authToken}`)
                .send({ position });
            return response;
        });
    }
    // Function to delete a song from the user's tier list
    function deleteSongFromTierList(position, authToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.app)
                .post("/action/deletesong")
                .set("Authorization", `Bearer ${authToken}`)
                .send({ position });
            return response;
        });
    }
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        authToken = yield signupAndGetAuthToken();
    }));
    describe("Song Operations", () => {
        it("should add a song to user's tier list", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield addSongToTierList(testSong, authToken);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", "song changed");
        }));
        it("should read a song from user's tier list", () => __awaiter(void 0, void 0, void 0, function* () {
            // First, add a song
            yield addSongToTierList(testSong, authToken);
            // Then try to read it
            const response = yield readSongFromTierList(testSong.position, authToken);
            expect(response.status).toBe(200);
            expect(response.body).toMatchObject({
                name: testSong.songName,
                artist: testSong.artist,
                image: testSong.image,
            });
        }));
        it("should delete a song from user's tier list", () => __awaiter(void 0, void 0, void 0, function* () {
            // First, add a song
            yield addSongToTierList(testSong, authToken);
            // Then delete it
            const deleteResponse = yield deleteSongFromTierList(testSong.position, authToken);
            expect(deleteResponse.status).toBe(200);
            expect(deleteResponse.body).toHaveProperty("message", "Song deleted");
            // Verify the song is no longer readable
            const readResponse = yield readSongFromTierList(testSong.position, authToken);
            expect(readResponse.body).toHaveProperty("message", "No song found at this position");
        }));
        it("should handle unauthorized requests", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.app)
                .post("/action/addsong")
                .send(testSong);
            expect(response.status).toBe(401);
        }));
        it("should update existing song at the same position", () => __awaiter(void 0, void 0, void 0, function* () {
            // Add initial song
            yield addSongToTierList(testSong, authToken);
            // Add new song at same position
            yield addSongToTierList(newSong, authToken);
            // Read the song at that position
            const response = yield readSongFromTierList(testSong.position, authToken);
            expect(response.status).toBe(200);
            expect(response.body).toMatchObject({
                name: newSong.songName,
                artist: newSong.artist,
            });
        }));
    });
});
