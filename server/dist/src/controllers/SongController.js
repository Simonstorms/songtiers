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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Song_1 = require("../entity/Song");
const UserSongTier_1 = require("../entity/UserSongTier");
const getDataSource_1 = require("../utils/getDataSource");
class SongController {
}
_a = SongController;
SongController.addSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = (0, getDataSource_1.getDataSource)();
        const { songName, artist, image, position } = req.body;
        const { userId } = res.locals.jwtPayload;
        // Create song using repository
        const songRepository = db.getRepository(Song_1.Song);
        const song = yield songRepository.save({
            name: songName,
            artist: artist,
            image: image,
        });
        // Handle UserSongTier using repository
        const userSongTierRepository = db.getRepository(UserSongTier_1.UserSongTier);
        // Find existing tier
        const existingTier = yield userSongTierRepository.findOne({
            where: {
                userId: userId,
                position: position,
            },
        });
        if (existingTier) {
            // Update existing tier
            yield userSongTierRepository.update(existingTier.id, {
                songId: song.id,
            });
        }
        else {
            // Create new tier
            yield userSongTierRepository.save({
                position: position,
                userId: userId,
                songId: song.id,
            });
        }
        res.json({ message: "song changed" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
SongController.readSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = (0, getDataSource_1.getDataSource)();
        const { position } = req.body;
        const { userId } = res.locals.jwtPayload;
        const song = yield db
            .getRepository(Song_1.Song)
            .createQueryBuilder("song")
            .select([
            "song.name AS name",
            "song.artist AS artist",
            "song.image AS image",
        ])
            .innerJoin(UserSongTier_1.UserSongTier, "userSongTier", "userSongTier.songId = song.id")
            .where("userSongTier.userId = :userId", { userId })
            .andWhere("userSongTier.position = :position", { position })
            .getRawOne();
        if (song) {
            res.json(song);
        }
        else {
            res.json({ message: "No song found at this position" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
SongController.deleteSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = (0, getDataSource_1.getDataSource)();
        const { position } = req.body;
        const { userId } = res.locals.jwtPayload;
        const userSongTierRepository = db.getRepository(UserSongTier_1.UserSongTier);
        const songRepository = db.getRepository(Song_1.Song);
        const userSongTier = yield userSongTierRepository.findOne({
            where: {
                userId: userId,
                position: position,
            },
        });
        if (!userSongTier) {
            return res
                .status(404)
                .json({ message: "No song found at this position" });
        }
        const songId = userSongTier.songId;
        // Delete the UserSongTier entry
        yield userSongTierRepository.delete({ id: userSongTier.id });
        // Delete the Song
        yield songRepository.delete({ id: songId });
        res.json({ message: "Song deleted" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.default = SongController;
