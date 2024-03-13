import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
// import mongoose from './db';

const app = express();
const port = 5051;
const uri = 'mongodb+srv://aashutoshtripathy:aajtak223@ashutosh.sush2pt.mongodb.net/';

app.use(cors());
app.use(express.json());

// mongoose.connect(URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const databaseName = 'hr_database';
const collectionName = 'hr_data';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(async(err) => {
  if(err){
  console.error('Error in connecting the database',err);
  return;
  }else{
    console.log('Connected to the database');
  }

  try {
    const database = client.db(databaseName);
    console.log(`database created successfully ${databaseName}`)
    const collection = database.collection(collectionName);
    console.log(`database table has been created successfully with the table name ${collectionName}`)
    client.close();
    console.log(`the database has been closed successfully.`)
  } catch (error) {
    console.error('Error in creating the databse and collections',error)    
  }

})


const hrDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  empnumber: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const HrData = mongoose.model('HrData', hrDataSchema);

app.post('/api/post', async (req, res) => {
  console.log('Data received Successfully');
  const { name, empnumber, email, role, password, status } = req.body;

  try {
    const newHrData = new HrData({
      name,
      empnumber,
      email,
      role,
      password,
      status,
    });

    const savedData = await newHrData.save();
    res.status(200).json({ message: 'Inserted successfully', data: savedData });
  } catch (error) {
    console.error('Error in inserting the data', error);
    res.status(500).send('Internal server error');
  }
});

app.get('/api/get', async (req, res) => {
  try {
    const data = await HrData.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in fetching the data', error);
    res.status(500).send('Internal Server Error.');
  }
});

app.delete('/api/delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const deletedData = await HrData.findByIdAndDelete(id);
    res.status(200).json(deletedData);
  } catch (error) {
    console.error('There is an error in deleting the data ', error);
    res.status(500).send('Internal server error');
  }
});

app.get('/api/fetch/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const fetchedData = await HrData.findById(id);
    res.status(200).json(fetchedData);
  } catch (error) {
    console.error('There is an error in fetching the data ', error);
    res.status(500).send('Internal server error');
  }
});

app.put('/api/update/:id', async (req, res) => {
  const id = req.params.id;
  const { name, empnumber, email, role, password, status } = req.body;

  try {
    const updatedData = await HrData.findByIdAndUpdate(
      id,
      { name, empnumber, email, role, password, status },
      { new: true }
    );
    res.status(200).json({ message: 'Successfully Updated', data: updatedData });
  } catch (error) {
    console.error('There is an error in updating the data', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
