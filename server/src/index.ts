import "reflect-metadata";
import express, {Request,Response} from "express";
import datasource from "./config/database";
import {User} from "./entity/User";

interface SigninFormData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}
//Connects to the Database -> then starts the express
datasource.initialize().then(() =>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err);
});

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({test: "test"});
})

app.get("/user", (req: Request, res: Response) => {
    res.json({test: "user"});
    console.log(req);
    console.log(res);
})
app.post('/api/signin', (req: Request, res: Response) => {
    // Type the request body as SigninFormData
    const data: SigninFormData = req.body;

    // Now you can access the form data with type safety
    console.log('First Name:', data.firstname);
    console.log('Last Name:', data.lastname);
    console.log('Email:', data.email);
    console.log('Password:', data.password);

    // Respond to the request
    res.json({ message: 'Sign in successful', data });
});
app.post("/user", async function (req: Request, res: Response) {

    console.log("test")
    const user = await datasource
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
            { username: "Timber", email: "timber@example.com", password: "password1" },
            { username: "Phantom", email: "phantom@example.com", password: "password2" },
        ])
        .execute();
    console.log(res);
    return res.send('User created');
});
app.listen(port, () => {

    console.log(`Server started on port ${port}`);
})
