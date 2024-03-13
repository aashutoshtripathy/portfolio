import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './home.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Hrview = () => {
    const [data, setData] = useState([])

    const navigate = useNavigate();

    const fetchData = async() => {
        try {
            const response = await axios.get('http://localhost:5051/api/get')
            setData(response.data)
        } catch (error) {
            console.log("Error in fetching the data from the backend",error)
        }
    }

    useEffect(() => {
     fetchData()
    }, [])


    const handleEdit = (id) => {
        navigate(`/hredit/${id}`)
    }

    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:5051/api/delete/${id}`)
            fetchData()
        } catch (error) {
            console.log(`Error with deleting the data ${id}`)
        }
    }
    
  return (
    <div>
        <h1>Employee Data</h1>
        <table>
            <thead>
                <tr>
                    <th>ID:</th>
                    <th>Name:</th>
                    <th>Emoplyee Number:</th>
                    <th>Email:</th>
                    <th>Role:</th>
                    <th>Status:</th>
                    <th colSpan={2}>Operations</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((item,index) => {
                return<tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.empnumber}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.status}</td>
                    <td><button onClick={() => handleEdit(item._id)}><EditIcon/></button></td>
                    <td><button onClick={() => handleDelete(item._id)}><DeleteIcon/></button></td>
                </tr>
                }) }
            </tbody>
        </table>
        <Link to={`/hrhome`}>Add Data</Link>
    </div>
  )
}

export default Hrview