import React from 'react'
import Input from './Input'

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
        <Input label={`Mobile Number:`} placeholder={`Mobile Number`} type={`number`} />
        <Input label={`E-mail:`} placeholder={`Email`} type={`email`}  />
        <Input label={``} placeholder={} type={}  />
        <Input label={``} placeholder={} type={}  />
        <Input label={``} placeholder={} type={}  />
        <Input label={``} placeholder={} type={}  />
        <Input label={``} placeholder={} type={}  />
        <Input label={``} placeholder={} type={}  />
        <Input type={`submit`} />
        </form>
    </div>
  )
}

export default Signup