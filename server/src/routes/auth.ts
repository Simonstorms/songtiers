import AuthController from "../controllers/AuthControler";
import {Router} from "express";

const router = Router();

router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);

export default router