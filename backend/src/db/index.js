import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const uri = process.env.MONGO_URI;

const connectDB = async () => {
    console.log(uri)
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`${connection.connection.host}`);
        console.log("connected Successfully")
    } catch (error) {
        console.error("error in connecting",error);
        process.exit(1);
    }
}


export default connectDB;