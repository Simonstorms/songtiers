import express from "express";
import datasource from "./config/database";

import cors from "cors";
import helmet from "helmet";
import routes from "./routes";



//Connects to the Database -> then starts the express


const app = express();

//connect database
datasource.initialize().then(() =>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err);
});
//middleware
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(helmet());
app.use('/', routes);




