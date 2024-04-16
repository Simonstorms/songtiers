import {Request, Response} from "express";
import {User} from "../entity/User";
import * as dotenv from "dotenv";
var jwt = require('jsonwebtoken');
import datasource from "../config/database";
import bcrypt from 'bcryptjs'

dotenv.config();
const secret:string = process.env.JWT_SECRET!;

interface FormData {
    username: string;
    email: string;
    password: string;
}
function hashPassword(password: string): string {
    console.log('test')
    return bcrypt.hashSync(password, 9);

}

class AuthController {
    static signup = async (req: Request, res: Response) => {
        const data: FormData = req.body;
        console.log(data);
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

        // sign jwt, valid for 1 hour
        const token = jwt.sign(
            { userId:user.identifiers[0].id, username: data.username },secret ,
            { expiresIn: "1d" }
        );




        // send the jwt in the response
        res.send({ message: "User created successfully", user: { id: user.identifiers[0].id, username: data.username, email: data.email }});


    };

    static signin = async (req:Request,res:Response) =>{
        const { username, password } = req.body;

        // Attempt to retrieve the user by username or email
        const user = await datasource.getRepository(User)
            .createQueryBuilder("user")
            .where("user.username = :username OR user.email = :username", { username })
            .getOne();

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        // Check if the password matches
        const isValid:boolean = bcrypt.compareSync(password, user.password);
        if (!isValid) {
            return res.status(401).send({ message: "Invalid credentials" });
        }

        // If valid, sign the JWT
        const token = jwt.sign(
            { userId: user.id, username: user.username },
            secret,
            { expiresIn: "1h" }
        );
        res.cookie('jwt_cookie', token, { maxAge: 24 * 60 * 60  });
        console.log('erstellt')
        // Send the JWT to the user
        res.send({ token });
    }



};

export default AuthController;
