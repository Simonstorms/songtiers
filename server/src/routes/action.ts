import SongController from "../controllers/SongController";
import {Router} from "express";
import { checkJwt } from "../middleware/checkJwt";

const router = Router();

 router.post('/addsong',[checkJwt],  SongController.addSong);
router.post('/readsong',[checkJwt],  SongController.readSong);


export default router