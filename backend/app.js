import express from "express";
import mysql from 'mysql';
import cors from 'cors';




const app = express();
const port = 5050;


app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin'
})

db.connect((err) => {
    if(err){
        console.error('error in connecting the database',err);
    }else{
        console.log('Connected Successfully...');
    }

    const createDatabase = "CREATE DATABASE IF NOT EXISTS human_resource";
    db.query(createDatabase,(err) => {
        if(err){
            console.log('Error in creating database',err);
        }else{
            console.log('Created database successfully');
            db.query('USE human_resource')
            const createTable = `CREATE TABLE IF NOT EXISTS hr_data(
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                empnumber VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                role VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                status VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`;
            db.query(createTable,(err) => {
                if(err){
                    console.log('Getting error in creating the table.',err);
                }else(
                    console.log('Table created successfully')
                )
            })
        }
    })
})

app.post('/api/post',(req,res) => {
    console.log('Data recived Successfully')
    const {name,empnumber,email,role,password,status } = req.body;
    const insertQuery = "INSERT INTO hr_data(name,empnumber,email,role,password,status) VALUES (?,?,?,?,?,?)";
    db.query(insertQuery,[name,empnumber,email,role,password,status],(err,result) => {
        if(err){
            console.error("error in inserting the data",err);
            res.status(500).send("Internal server error");
        }else{
            console.log('Inserted Successfully.',result);
            res.status(200).json({message: "inserted successfully", data: {name,empnumber,email,role,password,status }})
        }
    } )
});

app.get('/api/get',(req,res) => {
    const fetchQuery = "SELECT * FROM hr_data";
    db.query(fetchQuery,(err,result) => {
        if(err){
            console.error('Error in fetching the data',err);
            res.status(500).send("Internal Server Error.");
        }else{
            console.log('Successfully Fetched',result);
            res.status(200).json(result)
        }
    })
});

app.delete('/api/delete/:id',(req,res) => {
    const id = req.params.id;
    const deleteQuery = "DELETE FROM hr_data WHERE id = ?";
    db.query(deleteQuery,[id],(err,result) => {
        if(err){
            console.error("There is an error in deleting the data ",err);
            res.status(500).send("Internal server error");
        }else{
            console.log("successfully deleted",result);
            res.status(200).json(result);
        }
    })
});


app.get('/api/fetch/:id',(req,res) => {
    const id = req.params.id;
    const getQuery = "SELECT * FROM hr_data WHERE id = ?";
    db.query(getQuery,[id],(err,result) => {
        if(err){
            console.error("There is an error in fetching the data ",err);
            res.status(500).send("Internal server error");
        }else{
            console.log("successfully fetched",result);
            res.status(200).json(result);
        }
    })
});

app.put('/api/update/:id',(req,res) => {
    const id = req.params.id;
    const {name,empnumber,email,role,password,status } = req.body;
    const updateQuery = "UPDATE hr_data SET name = ?, empnumber = ?, email = ?, role = ?, password = ?, status = ? WHERE  id = ?";
    db.query(updateQuery,[name,empnumber,email,role,password,status,id ],(err,result) => {
        if(err){
            console.error('There is an error in updating the data',err);
            res.status(500).send("Internal server error");
        }else{
            console.log("Successfully updated",result);
            res.status(200).json({message: "successfully Updated",data: {name,empnumber,email,role,password,status }})
        }
    })
});

app.listen(port,() => {
    console.log(`Server is running on port number ${port}`);
})