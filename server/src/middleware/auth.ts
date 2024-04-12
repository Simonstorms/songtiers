import { User } from "../entity/User";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function  auth(req: Request, res: Response, next: NextFunction) {

};