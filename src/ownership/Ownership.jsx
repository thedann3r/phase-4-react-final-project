import React, { useEffect, useState } from "react";
import "../App.css"
import AirplaneList from "./List";
import NewOwnership from "./New";

function Ownership(){ 
  const [planes,setPlanes] = useState([])
  useEffect(() => {
    fetch("https://phase-4-final-project-7azq.onrender.com/ownership")
    .then(res => res.json())
    .then(data => {
      setPlanes(data)
    })
    .catch(err => console.log(err))
  },[])

  return( 
    <>
    <h1 className="mainH">🛫New Plane Ownership</h1>
     <NewOwnership planes={planes} setPlanes={setPlanes}/>
     <AirplaneList planes={planes} setPlanes={setPlanes}/>
    </>
  )
}

export default Ownership 