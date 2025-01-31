import { useState } from "react"

function PlaneOwnerItems({owners_id,planes_id, id, planes,setPlanes}){
  const [update,setUpdate] =useState({
    owners_id:0,
    planes_id:0
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
    fetch(`https://phase-4-final-project-7azq.onrender.com/ownership/${id}`, {
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
          craft.owners_id = updated.owners_id
          craft.planes_id = updated.planes_id
        }
        return craft
      })
      setPlanes(updatedPlane)
      setUpdate({
        'owners_id':0,
        "planes_id":0
      })
      alert('Updated successfully!!')
    })
    .catch(err => console.log(err))
  }

  function handleDelete(){
    fetch(`https://phase-4-final-project-7azq.onrender.com/ownership/${id}`, {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res => res.json())
    .then(() => {
      let remainder = planes.filter(fins => fins.id !== id)
      setPlanes(remainder)
      alert('Deleted successfully!')
    })
    .catch(err => console.log(err))
  }
    return(
        <div id="content">
          <h2 className="mini">owners's Id: </h2>
            <h2 className="cont">{owners_id}</h2>
            <h2 className="mini">plane's Id: </h2>
            <h3 className="cont">{planes_id}</h3>
              <form id="new" onSubmit={handleUpdate}>
                <label className="label">owner id: </label>
                <input className="input" type="text" name="owners_id" placeholder="owners_id" value={update.owners_id} required onChange={handleChange}/><br />
                <label className="label">planes id: </label>
                <input className="input" type="number" name="planes_id" placeholder="planes_id" value={update.planes_id} required onChange={handleChange}/><br />
                
                <button className="update" type="submit">Update</button>
            </form>
              <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default PlaneOwnerItems