import auth from "./auth";
import {Router} from "express";
import action from "./action";

const routes = Router();

routes.use('/auth',auth);
 routes.use('/action',action);

export default routes