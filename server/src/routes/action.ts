import SongController from "../controllers/SongController";
import {Router} from "express";
import { checkJwt } from "../middleware/checkJwt";

const router = Router();

 router.post('/addsong',[checkJwt],  SongController.addSong);


export default router