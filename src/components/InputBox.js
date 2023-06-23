import React, { useState } from 'react'
import "./InputBox.css"

const InputBox = (props) => {

    const [focused,setFocused]=useState(false)
    const {label,onChange,errorMessage,id,...inputProps} = props
    const handleFocus = (e)=>{
        setFocused(true);
    }
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input  {...inputProps}  onChange={onChange} onFocus={()=>(inputProps.name==="confirmPassword" && setFocused(true))}  onBlur={handleFocus} focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default InputBox