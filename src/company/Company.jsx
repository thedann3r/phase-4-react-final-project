import React, { useEffect, useState } from "react";
import "../App.css"
// import Search from "./Search";
// import Footer from "./Footer";
import AirplaneList from "./List";
import NewPlane from "./New";
 
function Company(){ 
  const [planes,setPlanes] = useState([])
  // const [searchFish,setSearchFish] = useState("")
  useEffect(() => {
    fetch("http://127.0.0.1:5000/company")
    .then(res => res.json())
    .then(data => {
      setPlanes(data)
    })
    .catch(err => console.log(err))
  },[])

  // const displayFish = fish.filter((fishery) => `${fishery.name}`.toLowerCase().includes(searchFish.toLowerCase()))

  return(
    <>
     <NewPlane planes={planes} setPlanes={setPlanes}/>
     {/* <Search onSearch={setSearchFish}/> */}
     <AirplaneList planes={planes} setPlanes={setPlanes}/>
    </>
  )
}

export default Company