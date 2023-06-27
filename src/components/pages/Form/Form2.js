import React from 'react'
import InputBox from '../Inputs/InputBox'
import { onChange } from '../utilFunctions'
import { handleSubmit } from '../utilFunctions'
import { inputform2 } from '../../allInputs'



const Form2 = ({values ,setValues}) => {

const inputs = inputform2


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("values",JSON.stringify(values))

  //   schedule.scheduleJob(`${values.datetime}`, function () {
    
  //         alert("The answer to life, the universe, and everything!");
    
  //       });
  // }


  // const onChange = (e) => {
  //   if(e.target.type==="file"){
  //     var reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload=()=>{
  //       console.log(reader.result);
  //       setValues({ ...values, [e.target.name]: reader.result })
  //     }
  //     reader.onerror=console.error();
  //     return 
  //   }
  //   setValues({ ...values, [e.target.name]: e.target.value })
  // }


//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setValues({
//       ...values,
//       personName:value
//     })
//   };

  return (
    
    <div className='app'>
          
  
      <form onSubmit={handleSubmit}>
        <h1> Add New Court </h1>
        {inputs.map((input) => (
          <InputBox key={input.id} {...input} onChange={(e)=> onChange(e ,values , setValues)} value={values[input.name]} />
        ))
        }
    
        <button>Submit</button>

      </form>
    </div>
  )
}

export default Form2