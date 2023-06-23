import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { showUser } from '../features/userDetailSlice'
import { useSelector } from 'react-redux'
import CustomModal from './CustomModal'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { deleteUser } from '../features/userDetailSlice'

const Read = () => {


    const dispatch = useDispatch()

    const [showPopup, setShowpopup] = useState(false);


    const [radioData,setRadioData] = useState("")

    const [id, setId] = useState();

    const { users, loading,searchData } = useSelector((state) => state.app)

    useEffect(() => {
        dispatch(showUser())
    }, [])

    if (loading) {
        return (<h2>Loading </h2>)
    }

    return (
        <div>
            <Navbar/>
            {
                showPopup
                &&
                <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowpopup} />
            }
            <h2>All Data</h2>
            <input className="form-check-input" name="gender" checked={radioData===""} onChange={(e)=>setRadioData("")} value="" type='radio' />
            <label className="form-check-label">All</label>
            <input className="form-check-input" name="gender" checked={radioData==="Male"} onChange={(e)=>setRadioData(e.target.value) }value="Male" type='radio'  />
            <label className="form-check-label">Male</label>
            <input className="form-check-input" name="gender" checked={radioData==="Female"} value="Female" type='radio' onChange={(e)=>setRadioData(e.target.value)} />
            <label className="form-check-label">Female</label>

            {users && 

                users.filter((ele)=>{
                    if(searchData.length===0){
                        return ele
                    }else{
                        return ele.name.toLowerCase().includes(searchData.toLowerCase())
                    }
                
                }).filter((ele)=>{
                   if(radioData===""){
                    return ele
                   }
                   return ele.gender===radioData;
                })
                .map((ele) => (<div  key={ele.id}>
                    <div key={ele.id} className="card w-50 mx-auto" >
                        <div className="card-body">
                            <h5 className="card-title">{ele.name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{ele.gender}</h6>
                            <button href="#" className="card-link" onClick={() => [setId(ele.id), setShowpopup(true)]}>View</button>
                            <Link to={`/edit/${ele.id}`} className="card-link">Edit</Link>
                            <Link onClick={()=>dispatch(deleteUser(ele.id))} href="#" className="card-link">Delete</Link>
                        </div>
                    </div>
                </div>)
                )}
        </div>
    )
}

export default Read