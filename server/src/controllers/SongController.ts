import {Request, Response} from "express";
import datasource from "../config/database";
import { SongTiers } from "../entity/SongTiers";
class SongController{
    static addSong = async (req:Request, res:Response) => {
        const { song, artist, image, position } = req.body;
        await datasource
            .createQueryBuilder()
            .insert()
            .into(SongTiers)
            .values([
                { position: position, name: song, artist: artist ,image: image},
            ])
            .execute();

        res.json({ message: 'song changed' });
    }
}

export default SongController