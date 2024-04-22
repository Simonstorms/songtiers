import express from "express";
import datasource from "./config/database";

import cors from "cors";
import helmet from "helmet";
import routes from "./routes";



//Connects to the Database -> then starts the express


const port = process.env.PORT || 8000;
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
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(helmet());
app.use('/', routes);



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
