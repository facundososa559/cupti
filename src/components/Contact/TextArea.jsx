import React from 'react'

function TextArea({label, type, name, value, onChange}) {
  return (
    <div>
        <label>{label}</label>
        <textarea className='input' rows={8} type={type} name={name} value={value} onChange={onChange}/>
    </div>
  )
}

export default TextArea