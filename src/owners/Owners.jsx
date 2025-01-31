import React, { useEffect, useState } from "react";
import "../App.css"
import OwnerList from "./List";
import NewOwner from "./New";

function Owners(){ 
  const [owners,setOwners] = useState([])
  useEffect(() => {
    fetch("https://phase-4-final-project-7azq.onrender.com/owners")
    .then(res => res.json()) 
    .then(data => {
      setOwners(data)
    })
    .catch(err => console.log(err))  
  },[])

  return(
    <>
    <h1 className="mainH">🛫Aerospace plane Owners</h1>
     <NewOwner owners={owners} setOwners={setOwners}/>
     <OwnerList owners={owners} setOwners={setOwners}/>
    </>
  )
}

export default Owners