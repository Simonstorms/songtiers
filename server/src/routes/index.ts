import auth from "./auth";
import {Router} from "express";

const routes = Router();

routes.use('/auth',auth);
// routes.use('/action',action);

export default routes