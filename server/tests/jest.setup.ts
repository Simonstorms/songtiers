import { DataSource } from "typeorm";
import { User } from "../src/entity/User";
import { Song } from "../src/entity/Song";
import { UserSongTier } from "../src/entity/UserSongTier";
import dotenv from "dotenv";

process.env.NODE_ENV = "test";
dotenv.config({ path: ".env.test" });

export const testDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: `${process.env.POSTGRES_DB}_test`,
  entities: [User, Song, UserSongTier],
  synchronize: true,
  dropSchema: true,
});

beforeAll(async () => {
  if (!testDataSource.isInitialized) {
    await testDataSource.initialize();
  }
  await testDataSource.synchronize(true);
});

beforeEach(async () => {
  if (testDataSource.isInitialized) {
    await testDataSource.query('TRUNCATE TABLE "user_song_tier" CASCADE');
    await testDataSource.query('TRUNCATE TABLE "song" CASCADE');
    await testDataSource.query('TRUNCATE TABLE "user" CASCADE');
  }
});

afterAll(async () => {
  if (testDataSource.isInitialized) {
    await testDataSource.destroy();
  }
});
