import React from 'react'

const Input = ({label,type,placeholder,name,value,onChange}) => {
  return (
    <div>
        <label>{label}
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
        </label>
    </div>
  )
}

export default Input