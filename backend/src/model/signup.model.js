import mongoose from "mongoose";
import { Schema } from "mongoose";


const userSchema = new Schema({
    fname: {
        type:String,
        required:true,
    },
    lname: {
        type:String,
        required: true,
    },
    mob:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})


export const Signup = mongoose.model("Signup",userSchema)