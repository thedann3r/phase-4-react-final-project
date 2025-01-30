import { useState } from "react"

function AirplaneItems({name,planeCompany_id, id, planes,setPlanes}){
  const [update,setUpdate] =useState({
    name:"",
    planeCompany_id:0
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
    fetch(`http://127.0.0.1:5000/planes/${id}`, {
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
          craft.planeCompany_id = updated.planeCompany_id
        }
        return craft 
      })
      setPlanes(updatedPlane)
      setUpdate({
        'name':"",
        "planeCompany_id":0
      })
      alert(`poof ${name} updated successfully!!`)
    })
    .catch(err => console.log(err))
  }

  function handleDelete(){
    fetch(`http://127.0.0.1:5000/planes/${id}`, {
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
            <h2 className="mini">name:</h2>
            <h2><strong>{name}</strong></h2>
            <h3 className="mini">Manufucturing Id:</h3>
            <h3>{planeCompany_id}</h3>
              <form id="new" onSubmit={handleUpdate}>
                <input className="input" type="text" name="name" placeholder="Name" value={update.name} required onChange={handleChange}/><br />
                <input className="input" type="number" name="planeCompany_id" placeholder="planeCompany_id" value={update.planeCompany_id} required onChange={handleChange}/><br />
                
                <button className="update" type="submit">update!</button>
            </form>
            <button className="delete" onClick={handleDelete}>delete</button>
        </div>
    )
}

export default AirplaneItems