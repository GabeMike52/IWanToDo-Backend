import express from "express";
import cors from "cors";
import connectToPostgreSQL from "./config/db";

const app = express();
connectToPostgreSQL().catch(console.error);

app.use(cors());
app.use(express.json());

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};

export default app;
