import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [inpVal, setInpVal] = useState({
        user: '',
        pass: ''
    })

    const handleChange = (identifier,value) => {
        setInpVal(prevVal => ({
            ...prevVal,
            [identifier]: value
        }))
    }

    const handleClick = () => {
        navigate('/home');
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Username:
                <input type='text' value={inpVal.user} onChange={(e) => handleChange('user',e.target.value)} placeholder='Username'/>
            </label>
            <label>Password:
                <input type='password' value={inpVal.pass} onChange={(e) => handleChange('pass',e.target.value)} placeholder='Password' />
            </label>
            <input type='submit' onClick={handleClick} value={`Login`} />
        </form>
    </div>
  )
}

export default Login