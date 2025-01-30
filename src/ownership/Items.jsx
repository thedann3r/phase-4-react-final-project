import { useState } from "react"

function PlaneOwnerItems({owners_id,planes_id, id, planes,setPlanes}){
  const [update,setUpdate] =useState({
    owners_id:"",
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
    fetch(`http://127.0.0.1:5000/planeowners/${id}`, {
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
        'owners_id':"",
        "planes_id":0
      })
      alert('Updated successfully!!')
    })
    .catch(err => console.log(err))
  }

  function handleDelete(){
    fetch(`http://127.0.0.1:5000/planeowners/${id}`, {
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
            <h2>{owners_id}</h2>
            <h3>{planes_id}</h3>
              <form id="new" onSubmit={handleUpdate}>
                <input className="input" type="text" name="owners_id" placeholder="owners_id" value={update.owners_id} required onChange={handleChange}/><br />
                <input className="input" type="number" name="planes_id" placeholder="planes_id" value={update.planes_id} required onChange={handleChange}/><br />
                
                <button id="add" type="submit">UPDATE!</button>
            </form>
              <button id="delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default PlaneOwnerItems