import React from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import './home.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Hredit = () => {

    const {id} = useParams();

    const [inpVal, setInpVal] = useState({
        name: '',
        empnumber: '',
        email: '',
        role: '',
        password: '',
        status: ''
    })

    const fetchData = async(id) => {
        try {
            const response = await axios.get(`http://localhost:5051/api/fetch/${id}`);
            setInpVal(response.data);
            const responseData = response.data[0]
            setInpVal({
                name: responseData.name,
                empnumber: responseData.empnumber,
                email: responseData.email,
                role: responseData.role,
                password: responseData.password,
                status: responseData.status
              });
        } catch (error) {
            console.error("Unable to connect",error);
        }
    }

    useEffect(() => {
        fetchData(id);
       }, [id])

    const navigate = useNavigate();

    const submitDisabled = () => {
        const requiredFields = ['name','empnumber','email','status']
        const hasEmptyFields = requiredFields.some(field => inpVal[field] === '')
        if(inpVal.role === 'Admin' ){
        return Object.values(inpVal).some(value => value === '');
        }
        return hasEmptyFields;
    } 

    const handleChange = (identifier,value) => {
        setInpVal(prevVal => ({
            ...prevVal,
            [identifier]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            await axios.put(`http://localhost:5051/api/update/${id}`,inpVal);
            navigate('/hrview')
            console.log('Successfully Updated.');
        } catch (error) {
            console.error('Error encountered in updating',error);
        }
    }
  return (
    <div>
        <h1>Update User</h1>
        <div className='main'>
            <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name
            <input type='text' id='name' name='name' value={inpVal.name} onChange={(e) => handleChange('name',e.target.value)}/>
        </label>
        <label htmlFor='empnumber'>Emp. Number
            <input type='text' id='empnumber' name='empnumber' value={inpVal.empnumber} onChange={(e) => handleChange('empnumber',e.target.value)}/>
        </label>
        <label htmlFor='email'>Email
            <input type='email' id='email' name='email' value={inpVal.email} onChange={(e) => handleChange('email',e.target.value)}/>
        </label>
        <label htmlFor='role'>Role</label> 
    <select name="role" id="role" value={inpVal.role} onChange={(e) => handleChange('role',e.target.value)}> 
        <option value=''  hidden>Select Role</option>
        <option value="Admin">Admin</option> 
        <option value="Manager">Manager</option> 
        <option value="Jury">Jury</option> 
    </select>
  
        {inpVal.role === 'Admin' && <label htmlFor='password'>Password
            <input type='password' id='password' name='password' value={inpVal.password} onChange={(e) => handleChange('password',e.target.value)}/>
        </label>}
        <label htmlFor='status'>Status</label> 
    <select name="status" id="status" value={inpVal.status} onChanSubmitge={(e) => handleChange('status',e.target.value)}> 
        <option value=''  hidden>Select Status</option>
        <option value="Unverified">Unverified</option> 
        <option value="Active">Active</option> 
        <option value="Deactive">Deactive</option> 
    </select>
        <input type='submit' disabled={submitDisabled()} value={`Update`}/>
        </form>
        <Link to={`/`}>Visit User List page</Link>
        </div>
    </div>
  )
}


export default Hredit