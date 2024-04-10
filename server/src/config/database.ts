import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import {User} from "../entity/User";
dotenv.config();

const datasource =  new DataSource( {
    type: "postgres",
    host: process.env.POSTGRES_HOST ,
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER ,
    password: process.env.POSTGRES_PASSWORD ,
    database: process.env.POSTGRES_DB ,
    entities: [User],
    synchronize: true,
});

export default datasource;