// server/src/app.ts
import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";

const app = express();

//middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(helmet());
app.use("/", routes);

export { app };
