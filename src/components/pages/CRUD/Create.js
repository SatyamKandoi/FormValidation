import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../../../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const [users, setUsers] = useState({})
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
        console.log(users)
    }
  

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(users)
        dispatch(createUser(users))
        navigate("/read")
    }


    return (

        <div className='apps'>

            <h2>Enter Your Details</h2>
            <form className='w-50 ml-30' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="name" name="name" className="form-control" onChange={getUserData} />

                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getUserData} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="text" name='age' className="form-control" onChange={getUserData} />
                </div>
                <div className="form-check">
                    <input className="form-check-input" name='gender' type="checkbox" value="Male" onChange={getUserData} />
                    <label className="form-check-label" >
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" name="gender" type="checkbox" value="Female" onChange={getUserData} />
                    <label className="form-check-label">
                        Female
                    </label>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form></div>
    )
}

export default Create