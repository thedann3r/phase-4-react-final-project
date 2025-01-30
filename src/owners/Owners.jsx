import React, { useEffect, useState } from "react";
import "../App.css"
// import Search from "./Search";
// import Footer from "./Footer";
import OwnerList from "./List";
import NewOwner from "./New";

function Owners(){ 
  const [owners,setOwners] = useState([])
  // const [searchFish,setSearchFish] = useState("")
  useEffect(() => {
    fetch("http://127.0.0.1:5000/owners")
    .then(res => res.json()) 
    .then(data => {
      setOwners(data)
    })
    .catch(err => console.log(err))
  },[])

  // const displayFish = fish.filter((fishery) => `${fishery.name}`.toLowerCase().includes(searchFish.toLowerCase()))

  return(
    <>
    <h1 className="mainH">🛫Aerospace plane Owners🛫</h1>
     <NewOwner owners={owners} setOwners={setOwners}/>
     {/* <Search onSearch={setSearchFish}/> */}
     <OwnerList owners={owners} setOwners={setOwners}/>
    </>
  )
}

export default Owners