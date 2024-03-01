import React from 'react'
import Input from './Input'
import { Link } from 'react-router-dom'

const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <h1>Signup Form</h1>
        <form onSubmit={handleSubmit}>
        <Input label={`First Name:`} placeholder={`First Name`} type={`text`} />
        <Input label={`Last Name:`} placeholder={`Last Name`} type={`text`} />
        <Input label={`Phone Number:`} placeholder={`Phone Number`} type={`number`} />
        <Input label={`E-mail:`} placeholder={`Email`} type={`email`}  />
        <Input label={`Password:`} placeholder={`Password`} type={`password`}  />
        <Input label={`Confirm Password:`} placeholder={`confirm Password`} type={`password`}  />
        <Input type={`submit`} value={`Sign Up`} />
        </form>
        <p>if you have already account?<Link to={`/`}>Log In</Link></p>
    </div>
  )
}

export default Signup