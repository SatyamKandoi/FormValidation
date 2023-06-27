import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { updateUser } from '../../../features/userDetailSlice';


const Update = () => {


    const { id } = useParams();

    const [updateData, setUpdateData] = useState({});

    const { users, loading } = useSelector((state) => state.app);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const singleUser = users.filter((ele) => ele.id === id);
            setUpdateData(singleUser?.[0]);
            
        }
    }, [])

    const newData = (e) =>{
        setUpdateData({...updateData,[e.target.name]:e.target.value})
    }

    const handleUpdate = (e) =>{
        e.preventDefault();
        dispatch(updateUser(updateData))
        navigate("/read")
    }

    console.log(updateData)
    return (
        <div className='apps'>

            <h2>Edit Your Details</h2>
            <form className='w-50 ml-30'
            onSubmit={handleUpdate}
            >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="name" value={ updateData && updateData.name} name="name" className="form-control"
                    onChange={newData}
                    />

                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" value={ updateData && updateData.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={newData}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="text" name='age' className="form-control"
                    value={ updateData && updateData.age}
                     onChange={newData}
                    />
                </div>
                <div className="form-check">
                    <input className="form-check-input"  value="Male"   checked={ updateData && updateData.gender=== "Male"} name='gender' type="radio"
                    onChange={newData}
                    />
                    <label className="form-check-label" >
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" name="gender"  type="radio" value="Female" checked={ updateData && updateData.gender === "Female"}
                    onChange={newData} 
                    />
                    <label className="form-check-label">
                        Female
                    </label>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form></div>
    )
}

export default Update