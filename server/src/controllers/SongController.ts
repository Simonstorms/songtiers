import {Request, Response} from "express";
import datasource from "../config/database";
import { Song } from "../entity/Song";
import { UserSongTier } from "../entity/UserSongTier";

class SongController{
    static addSong = async (req:Request, res:Response) => {
        const { songName, artist, image,position } = req.body;
        const song = await datasource
            .createQueryBuilder()
            .insert()
            .into(Song)
            .values([
                { name: songName, artist: artist ,image: image},
            ])
            .execute();
        const { userId } = res.locals.jwtPayload;

        await datasource
            .createQueryBuilder()
            .insert()
            .into(UserSongTier)
            .values([
                { position: position, userId: userId, songId:song.identifiers[0].id}
            ]).execute();


        res.json({ message: 'song changed' });
    }
    static readSong = async (req:Request, res:Response)=>{
        const {position} = req.body;
        const { userId } = res.locals.jwtPayload;

        const song = await datasource
            .createQueryBuilder()
            .select("song.name", "name")
            .addSelect("song.artist", "artist")
            .addSelect("song.image", "image")
            .from(Song, "song")
            .innerJoin(UserSongTier, "userSongTier", "userSongTier.songId = song.id")
            .where("userSongTier.userId = :userId", { userId })
            .andWhere("userSongTier.position = :position", { position })
            .getRawOne();
        if(song){
            res.json(song);
        }
        else{
            res.json({ message: 'No song found at this position' });
        }
    }
}

export default SongController