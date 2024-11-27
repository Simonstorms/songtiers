import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

async function setupTestDatabase() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: "postgres",
  });

  try {
    await client.connect();

    const dbName = `${process.env.POSTGRES_DB}_test`;
    const res = await client.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [dbName],
    );

    if (res.rows.length === 0) {
      await client.query(`CREATE DATABASE ${dbName}`);
      console.log(`Database ${dbName} created successfully`);
    }
  } catch (error) {
    console.error("Error setting up test database:", error);
    throw error;
  } finally {
    await client.end();
  }
}

if (require.main === module) {
  setupTestDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

export default setupTestDatabase;
