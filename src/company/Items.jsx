import { useState } from "react"

function AirplaneItems({name,founded, id, planes,setPlanes}){
  const [update,setUpdate] =useState({
    name:"",
    founded:0
  })
  function handleChange(e){
      e.preventDefault()
      let name = e.target.name
      let value = e.target.value

      setUpdate({
        ...update,
        [name]:value
      }) 
  } 
  function handleUpdate(e){
    e.preventDefault()
    fetch(`https://phase-4-final-project-7azq.onrender.com/company/${id}`, {
       method:"PATCH",
       headers:{
        "Content-Type":"application/json"
       },
       body:JSON.stringify(update)
    })
    .then(resp => resp.json())
    .then((updated) => {
      let updatedPlane = planes.map(craft => {
        if(craft.id === id){
          craft.name = updated.name
          craft.founded = updated.founded
        } 
        return craft
      })
      setPlanes(updatedPlane)
      setUpdate({
        'name':"",
        "founded":0
      })
      alert(`poof ${name} updated successfully!!`)
    })
    .catch(err => console.log(err))
  }

  function handleDelete(){
    fetch(`https://phase-4-final-project-7azq.onrender.com/company/${id}`, {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res => res.json())
    .then(() => {
      let remainder = planes.filter(fins => fins.id !== id)
      setPlanes(remainder)
      alert(`Poof! ${name} is gone!👋🏽`)
    })
    .catch(err => console.log(err))
  }  
    return(
        <div id="content">
            <h2 className="mini">Name</h2>
            <h2 className="cont"><strong>{name}</strong></h2>
            <h3 className="mini">Year founded</h3>
            <h2 className="cont"><strong>{founded}</strong></h2>
              <form id="new" onSubmit={handleUpdate}>
                <input className="input" type="text" name="name" placeholder="Name" value={update.name} required onChange={handleChange}/><br />
                <input className="input" type="number" name="founded" placeholder="founded" value={update.founded} required onChange={handleChange}/><br />
                
                <button className="update" type="submit">Update</button>
              </form>
              <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default AirplaneItems