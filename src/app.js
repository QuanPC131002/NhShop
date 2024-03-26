import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import { connectDB } from "./config/db";
import authRouter from "./routers/auth";
import productRouter from "./routers/product";
import mongoose from "mongoose";

const app = express();
dotenv.config();
const { PORT, DB_URI } = process.env;
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// connect db
// connectDB(process.env.DB_URI);
mongoose.connect(`${DB_URI}`).then(() => console.log("Database Connected!"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
// routers
app.use("/api/v1", authRouter);
app.use("/api/v1", productRouter);
export const viteNodeApp = app;
