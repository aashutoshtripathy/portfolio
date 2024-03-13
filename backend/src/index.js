import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {connectDB} from "./db";


dotenv.config({
    path: './env'
})


connectDB();
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});