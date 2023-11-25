import React from 'react'

export default function Inputs({id,name,type='text',title,value,onChange,error,onBlur,touched}) {
  return (
    <>
        <div className='input-group mb-3'>
            <label htmlFor={id} className='me-3 pt-2'>{title}</label> 
            <input onBlur={onBlur} type={type} value={value} name={name} id={id} onChange={onChange} className='form-control border-0 border-bottom shadow-sm'  ></input>
             {touched[name]&& error[name] && <p className='text text-danger'>{error[name]}</p> }
        </div>

    </>
  )
}
