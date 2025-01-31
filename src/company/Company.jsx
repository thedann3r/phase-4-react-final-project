import React, { useEffect, useState } from "react";
import "../App.css"
import AirplaneList from "./List";
import NewPlane from "./New";
 
function Company(){ 
  const [planes,setPlanes] = useState([])
  useEffect(() => {
    fetch("https://phase-4-final-project-7azq.onrender.com/company")
    .then(res => res.json())
    .then(data => {
      setPlanes(data)
    })
    .catch(err => console.log(err))
  },[])
  
  return(
    <>
    <h1 className="mainH">🛫Aerospace Manufacturers</h1>
     <NewPlane planes={planes} setPlanes={setPlanes}/>
     <AirplaneList planes={planes} setPlanes={setPlanes}/>
    </>
  )
}

export default Company