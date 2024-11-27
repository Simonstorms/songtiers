import { Request, Response } from "express";
import { Song } from "../entity/Song";
import { UserSongTier } from "../entity/UserSongTier";
import { getDataSource } from "../utils/getDataSource";

class SongController {
  static addSong = async (req: Request, res: Response) => {
    try {
      const db = getDataSource();
      const { songName, artist, image, position } = req.body;
      const { userId } = res.locals.jwtPayload;

      // Create song using repository
      const songRepository = db.getRepository(Song);
      const song = await songRepository.save({
        name: songName,
        artist: artist,
        image: image,
      });

      // Handle UserSongTier using repository
      const userSongTierRepository = db.getRepository(UserSongTier);

      // Find existing tier
      const existingTier = await userSongTierRepository.findOne({
        where: {
          userId: userId,
          position: position,
        },
      });

      if (existingTier) {
        // Update existing tier
        await userSongTierRepository.update(existingTier.id, {
          songId: song.id,
        });
      } else {
        // Create new tier
        await userSongTierRepository.save({
          position: position,
          userId: userId,
          songId: song.id,
        });
      }

      res.json({ message: "song changed" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  static readSong = async (req: Request, res: Response) => {
    try {
      const db = getDataSource();
      const { position } = req.body;
      const { userId } = res.locals.jwtPayload;

      const song = await db
        .getRepository(Song)
        .createQueryBuilder("song")
        .select([
          "song.name AS name",
          "song.artist AS artist",
          "song.image AS image",
        ])
        .innerJoin(
          UserSongTier,
          "userSongTier",
          "userSongTier.songId = song.id",
        )
        .where("userSongTier.userId = :userId", { userId })
        .andWhere("userSongTier.position = :position", { position })
        .getRawOne();

      if (song) {
        res.json(song);
      } else {
        res.json({ message: "No song found at this position" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  static deleteSong = async (req: Request, res: Response) => {
    try {
      const db = getDataSource();
      const { position } = req.body;
      const { userId } = res.locals.jwtPayload;

      const userSongTierRepository = db.getRepository(UserSongTier);
      const songRepository = db.getRepository(Song);

      const userSongTier = await userSongTierRepository.findOne({
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
      await userSongTierRepository.delete({ id: userSongTier.id });

      // Delete the Song
      await songRepository.delete({ id: songId });

      res.json({ message: "Song deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

export default SongController;
