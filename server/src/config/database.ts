import { DataSource } from "typeorm";
import { User } from "../entity/User";
import dotenv from "dotenv";
import { Song } from "../entity/Song";
import { UserSongTier } from "../entity/UserSongTier";

dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const datasource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database:
    process.env.NODE_ENV === "test"
      ? `${process.env.POSTGRES_DB}_test`
      : process.env.POSTGRES_DB,
  entities: [User, Song, UserSongTier],
  synchronize: true,
});

export default datasource;
