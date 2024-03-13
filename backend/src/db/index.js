import mongoose from "mongoose";
import { DB_NAME } from "../constant";


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Add other options as needed
        });
        console.log(`${connection.connection.host}`)
    } catch (error) {
        console.error("error in connecting",error);
        throw error;
    }
}


export default connectDB;