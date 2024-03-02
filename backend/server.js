import express from 'express';
import mysql from 'mysql';
import cors from 'cors';


const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin'
})


db.connect((err) => {
    if(err){
        console.error('unable to connect',err);
    }else{
        console.log('connected');

        const createDatabase = 'CREATE DATABASE IF NOT EXISTS myapp';
        db.query(createDatabase,(err) => {
            if(err){
                console.error('Error in creating database');
            }else{
                console.log('Database created successfully');
                db.query('USE myapp');
                const createTable = `CREATE TABLE IF NOT EXISTS mydata(
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    fname VARCHAR(255) NOT NULL,
                    lname VARCHAR(255) NOT NULL,
                    mob VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    password VARCHAR(255) NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )`;
                db.query(createTable,(err) => {
                    if(err){
                        console.error('error in creating table',err);
                    }else{
                        console.log('Table created successfully');
                    }
                })
            }
        })
    }
})


app.post('/signup',(req,res) => {
    console.log('Data recived successfully');
    const {fname,lname,mob,email,password} = req.body;
    const insertQuery = "INSERT INTO mydata (fname,lname,mob,email,password) VALUES (?,?,?,?,?)";
    db.query(insertQuery,[fname,lname,mob,email,password],(err) => {
        if(err){
            console.error('Error in submitting the error');
            res.status(500).send('Internal Error')
        }else{
            console.log('Data submitted successfully');
            res.status(200).json({message: 'submitted' , data:{fname,lname,mob,email,password}})
        }
    })
})

app.get("/signup-data",(req,res) => {
    console.log('Data recived')
})


app.listen(port,() => {
    console.log(`Server is running at ${port}`);
})