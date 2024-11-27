"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SongController_1 = __importDefault(require("../controllers/SongController"));
const express_1 = require("express");
const checkJwt_1 = require("../middleware/checkJwt");
const router = (0, express_1.Router)();
router.post('/addsong', [checkJwt_1.checkJwt], SongController_1.default.addSong);
router.post('/readsong', [checkJwt_1.checkJwt], SongController_1.default.readSong);
router.post('/deletesong', [checkJwt_1.checkJwt], SongController_1.default.deleteSong);
exports.default = router;
