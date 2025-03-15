import React from 'react'

function Input({label, type, name, value, onChange}) {
  return (
    <div>
        <label>{label}</label>
        <input className='input' type={type} name={name} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input