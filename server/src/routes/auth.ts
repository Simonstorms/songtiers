import AuthController from "../controllers/AuthController";
import {Router} from "express";

const router = Router();

router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);
router.post('/getuser', AuthController.getuser);

export default router