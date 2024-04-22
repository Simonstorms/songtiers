import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const secret:string = process.env.JWT_SECRET!;

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    // get the jwt token from the Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer Token

    let jwtPayload:any;

    // try to validate the token and get data
    try {
        if (!token) {
            res.status(401).send();
            return;
        }
        jwtPayload = jwt.verify(token, secret);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        // if token is not valid, respond with 401 (unauthorized)
        res.status(401).send();
        return;
    }

    // the token is valid for 1 hour
    // we want to send a new token on every request
    const { userId, firstname } = jwtPayload;
    const newToken = jwt.sign({userId, firstname}, secret, {
        expiresIn: "1d"
    });
    res.setHeader("token", newToken);

    // call the next middleware or controller
    next();
};