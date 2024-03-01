import React from 'react'

const Input = ({label,type,placeholder,value}) => {
  return (
    <div>
        <label>{label}
        <input type={type} placeholder={placeholder} value={value}/>
        </label>
    </div>
  )
}

export default Input