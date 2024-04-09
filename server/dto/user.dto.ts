class UserResponce {
    name: string;
    email: string;
    role: string;
}
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User.entity";
import { encrypt } from "../helpers/encrypt";
import * as cache from "memory-cache";

export class UserController {
    static async signup(req: Request, res: Response) {
        const { name, email, password, role } = req.body;
        const encryptedPassword = await encrypt.encryptpass(password);
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = encryptedPassword;
        user.role = role;

        const userRepository = AppDataSource.getRepository(User);
        await userRepository.save(user);
// Use the UserResponse DTO to structure the data being sent in the response
        const userdataSent = new UserResponce()
        userDataSent.name = user.name;
        userDataSent.email= user.email;
        userDataSent.role = user.role;



        const token = encrypt.generateToken({ id: user.id });

        return res
            .status(200)
            .json({ message: "User created successfully", token, userDataSent });
    }