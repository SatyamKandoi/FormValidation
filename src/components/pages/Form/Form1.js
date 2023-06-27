import React from 'react'
import InputBox from '../Inputs/InputBox'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Checkbox from '@mui/material/Checkbox';
import { inputform1 } from '../../allInputs';
import { handleSubmit } from '../utilFunctions';
import { onChange } from '../utilFunctions';
import { allnames } from '../../allValues';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = allnames
const Form1 = ({values , setValues}) => {
    const inputs = inputform1;
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("values",JSON.stringify(values))

  //   schedule.scheduleJob(`${values.datetime}`, function () {
    
  //         alert("The answer to life, the universe, and everything!");
    
  //       });
  // }

  //
  // const handleChange = (event) => {
  //   const {
  //     target: { value,name },
  //   } = event;
  //   console.log(name)
  //   setValues({
  //     ...values,
  //     personName:value,
  //   })
  // };

console.log(values)

  return (
    
    <div className='app'>
          
      <form onSubmit={handleSubmit}>
        <h1> Add New Court </h1>
        {inputs.map((input) => (
          <InputBox key={input.id} {...input} value={values[input.name]} onChange={(e)=> onChange(e ,values , setValues)}  />
        ))
        }

    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={values.personName}
          onChange={(e)=>onChange(e,values,setValues)}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}// Display the validation error state
          MenuProps={MenuProps}
          inputProps={
            {name:"personName"}
          }
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={values.personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>

        <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Basic date time picker" onChange={(newValue)=>{
          const val = newValue.toISOString()
          setValues({
            ...values,
            datetime:val
          })
          
        }} />
      </DemoContainer>


      </FormControl>

        <button>Submit</button>

      </form>
    </div>
  )
}

export default Form1