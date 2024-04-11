import { User } from "../entity/User";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function  auth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.cookies.token;
        if (!token) throw new Error("Unauthenticated");
        const { username }: any = jwt.verify(token, process.env.JWTSECRET!);
        const user = await User.findOne({ username });
        if (!user) throw new Error("Unauthenticated");
        res.locals.user = user;
        return next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: error.message });
    }
};