import dotenv from "dotenv";
import connectDB from './db/index.js'
import { app } from "./app.js";
import bodyParser from "body-parser";
import { Signup } from "./model/signup.model.js";


dotenv.config({
    path: './env'
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.post('/submit-form',async (req,res) => {
    const {fname,lname,mob,email,password} = req.body;

    const newUser = new Signup({
        fname,
        lname,
        mob,
        email,
        password
    })

    try {
        await newUser.save();
        res.status(200).json({message: "Data submitted successfully",data: {fname,lname,mob,email,password}})
    } catch (error) {
        console.log("There is an error in sending the data",error)
        res.status(500).json({error: "Inetrnal server error"})
    }
})

connectDB()

.then(() => {
    app.listen(process.env.PORT,() => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.error("Error in connecting the mongo db",error)
})