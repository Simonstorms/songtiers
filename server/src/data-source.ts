import "reflect-metadata";
import { DataSource } from "typeorm";

import * as dotenv from "dotenv";
import { User } from "./entity/User.entity";
import { Movie } from "./entity/Songs.entity";

dotenv.config();

const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, NODE_ENV } =
    process.env;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: POSTGRES_HOST,
    port: parseInt(POSTGRES_PORT || "5432"),
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,

    synchronize: NODE_ENV === "dev" ? false : false,
//logging logs sql command on the treminal
    logging: NODE_ENV === "dev" ? false : false,
    entities: [User, Movie],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
});