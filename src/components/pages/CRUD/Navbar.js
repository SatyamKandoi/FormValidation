import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchUser } from '../../../features/userDetailSlice'



const Navbar = () => {

    const debounce = (cb, time) => {
         let timer;
        return function (...args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => cb(...args), time)
        }
    
      }
      const retFunc = debounce((value) => setSearchData(value), 1000)

    const allusers = useSelector((state)=>state.app.users)
    const dispatch = useDispatch();
    const [searchData,setSearchData] = useState("");
    useEffect(()=>{
        dispatch(searchUser(searchData));
    },[searchData]);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">CRUD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Create User</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/read">All Posts ({allusers.length})</a>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" 
                        onChange={(e)=> retFunc(e.target.value) }
                        aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar