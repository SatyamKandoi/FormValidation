import React from 'react'
import Form2 from './Form2';
import Form1 from './Form1';


const MainForm = ({activeStep,values,setValues}) => {

  console.log(values)
  if(activeStep+1===2 ) return <Form2 values={values} setValues={setValues}/>

  else if(activeStep+1===1 ) return <Form1 values={values} setValues={setValues}/>
  else return<div >Form3 </div>


}

export default MainForm