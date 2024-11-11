import React from 'react'
import {useState} from "react"
import Login from "../AuthComponents/Login.jsx";
import Register from "../AuthComponents/Register.jsx";

function Home() {
  const [flag,setflag]=useState(true);
  return (
    <>
    <div className="container">
      <div className="container-fluid d-flex ">
        <div className="butons">
          <button className="btn btn-primary" onClick={()=>setflag(!flag)}>Login</button>
          <button className="btn btn-primary" onClick={()=>setflag(!flag)}>Register</button>
        </div>
        <div className="body">
          {
            flag?<Login/>:<Register/>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Home