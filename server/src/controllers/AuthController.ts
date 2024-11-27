import { Request, Response } from "express";
import { User } from "../entity/User";
import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { getDataSource } from "../utils/getDataSource";
import { JwtPayload } from "jsonwebtoken";
dotenv.config();
const secret: string = process.env.JWT_SECRET!;

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
interface CustomJwtPayload extends JwtPayload {
  userId: number;
  firstname: string;
}

function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 9);
}

class AuthController {
  static signup = async (req: Request, res: Response) => {
    const db = getDataSource();

    const data: FormData = req.body;
    // Check if the username or email already exists in the database
    const existingUser = await db
      .getRepository(User)
      .createQueryBuilder("user")
      .where("user.email = :email", { email: data.email })
      .getOne();

    if (existingUser) {
      res.status(400).send({ message: "Email already exists" });
      return;
    }

    // If username and email are unique, proceed with creating the new user
    let hash: string = hashPassword(data.password);
    const user = await db
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          password: hash,
        },
      ])
      .execute();

    // sign jwt, valid for 1 hour
    const token = jwt.sign(
      { userId: user.identifiers[0].id, firstname: data.firstname },
      secret,
      { expiresIn: "1d" },
    );

    // send the jwt in the response
    res.send({ token: token, userId: user.identifiers[0].id });
  };

  static signin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const db = getDataSource();

    // Attempt to retrieve the user by username or email
    const user = await db
      .getRepository(User)
      .createQueryBuilder("user")
      .where("user.email = :email", { email })
      .getOne();

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Check if the password matches
    const isValid: boolean = bcrypt.compareSync(password, user.password);
    if (!isValid) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    // If valid, sign the JWT
    const token = jwt.sign(
      { userId: user.id, firstname: user.firstname },
      secret,
      { expiresIn: "1d" },
    );

    // Send the JWT to the user
    res.send({ token: token, userId: user.id });
  };
  static getuser = async (req: Request, res: Response) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer Token

    if (token == null) return res.sendStatus(401); // If no token, unauthorized

    try {
      const decoded = jwt.verify(token, secret) as CustomJwtPayload;
      res.send({ userId: decoded.userId });
    } catch (err) {
      return res.sendStatus(403); // Invalid token
    }
  };
}

export default AuthController;
