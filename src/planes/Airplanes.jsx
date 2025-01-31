import React, { useEffect, useState } from "react";
import "../App.css"
import AirplaneList from "./List";
import NewPlane from "./New";

function Airplanes(){ 
  const [planes,setPlanes] = useState([])
  useEffect(() => {
    fetch("https://phase-4-final-project-7azq.onrender.com/planes")
    .then(res => res.json())
    .then(data => {
      setPlanes(data)
    })
    .catch(err => console.log(err))
  },[])

  return(
    <>
    <h1 className="mainH">🛫Aerospace plane names</h1>
     <NewPlane planes={planes} setPlanes={setPlanes}/>
     <AirplaneList planes={planes} setPlanes={setPlanes}/>
    </>
  )
}

export default Airplanes