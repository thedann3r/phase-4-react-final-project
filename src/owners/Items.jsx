import { useState } from "react"

function OwnerItems({name, id,owners,setOwners}){
  const [update,setUpdate] =useState({
    name:""
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
    fetch(`http://127.0.0.1:5000/owners/${id}`, {
       method:"PATCH",
       headers:{
        "Content-Type":"application/json"
       },
       body:JSON.stringify(update)
    })
    .then(resp => resp.json())
    .then((updated) => {
      let updatedOwner = owners.map(own => {
        if(own.id === id){
          own.name = updated.name
        }
        return own
      })
      setOwners(updatedOwner)
      setUpdate({
        "name":""
      })
      alert(`poof ${name} updated successfully!!`)
    })
    .catch(err => console.log(err))
  }

  function handleDelete(){
    fetch(`http://127.0.0.1:5000/owners/${id}`, {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res => res.json())
    .then(() => {
      let remainder = owners.filter(fins => fins.id !== id)
      setOwners(remainder)
      alert(`Poof! ${name} is gone!👋🏽`)
    })
    .catch(err => console.log(err))
  }
    return(
        <div id="content">
            <h2>{name}</h2>
              <form id="new" onSubmit={handleUpdate}>
                <input className="input" type="text" name="name" placeholder="Name" value={update.name} required onChange={handleChange}/><br />
                <button id="add" type="submit">UPDATE!</button>
            </form>
              <button id="delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default OwnerItems