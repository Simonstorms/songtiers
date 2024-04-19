import auth from "./auth";
import {Router} from "express";

const routes = Router();

routes.use('/checkJWT',auth);
// routes.use('/action',action);

export default routes