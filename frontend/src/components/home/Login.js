import React from 'react'
import { useState } from 'react';

const Login = () => {
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
            <input type='submit' value={`Login`} />
        </form>
    </div>
  )
}

export default Login