import schedule from "node-schedule"
export const onChange = (e,values,setValues) => {
    console.log(e,values)
    
    if(e.target.type=== "file"){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=()=>{
        console.log(reader.result);
        setValues({ ...values, image:reader.result })
      }
      reader.onerror=console.error();
    }

    setValues({ ...values, [e.target.name]: e.target.value })
  }
  export const handleSubmit = (e,values,setValues) => {
    e.preventDefault();
    localStorage.setItem("values",JSON.stringify(values))

    schedule.scheduleJob(`${values.datetime}`, function () {
    
          alert("The answer to life, the universe, and everything!");
    
        });

  }