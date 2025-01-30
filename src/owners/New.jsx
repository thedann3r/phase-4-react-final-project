import { useState } from "react"

function NewOwner({owners,setOwners}){
    const [newOwner,setNewOwner] = useState({
        name:""
    })
    function handleChange(e){
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value

        setNewOwner({
            ...newOwner,
            [name]:value
        })
    }
    function handleSubmit(e){
       e.preventDefault()
       fetch("http://127.0.0.1:5000/owners", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newOwner)
       })
       .then(resp => resp.json())
       .then(poisson => {setOwners([...owners,poisson])
        setNewOwner({
            name:""
        })
        alert(`Poof ${newOwner.name} created with success`)
       })
       .catch(error => console.log(error))
    }
    return(
        <div id="newness">
          <h2>New Owner</h2>
            <form id="new" onSubmit={handleSubmit}>
                <input className="input" type="text" name="name" placeholder="Name" value={newOwner.name} required onChange={handleChange}/>
                <button id="add" type="submit">ADD!</button>
            </form>
        </div>
    )
}

export default NewOwner