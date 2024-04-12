import {Request, Response} from "express";
import {User} from "../entity/User";
import * as dotenv from "dotenv";
import datasource from "../config/database";
import bcrypt from 'bcryptjs'

dotenv.config();
const config = process.env.JWT_SECRET!;

interface SigninFormData {
    username: string;
    email: string;
    password: string;
}
function hashPassword(password: string): string {
    return bcrypt.hashSync(password, 9);
}

class AuthController {
    static signup = async (req: Request, res: Response) => {
        const data: SigninFormData = req.body;

        // Check if the username or email already exists in the database
        const existingUser = await datasource.getRepository(User)
            .createQueryBuilder("user")
            .where("user.username = :username OR user.email = :email", { username: data.username, email: data.email })
            .getOne();

        if (existingUser) {
            res.status(400).send({ message: "Username or email already exists" });
            return;
        }

        // If username and email are unique, proceed with creating the new user
        let hash: string = hashPassword(data.password);
        const user = await datasource
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([
                { username: data.username, email: data.email, password: hash },
            ])
            .execute();

        res.status(201).send({ message: "User created successfully", user: { id: user.identifiers[0].id, username: data.username, email: data.email }});
    };
    static signin = async (req:Request,res:Response) =>{

    }
};

export default AuthController;
