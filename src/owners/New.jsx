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
       fetch("https://phase-4-final-project-7azq.onrender.com/owners", {
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
        <div className="newness">
            <h2 className="newer">New Owner</h2>
            <form id="new" onSubmit={handleSubmit}>
                <input className="new" type="text" name="name" placeholder="Name" value={newOwner.name} required onChange={handleChange}/>
                <button className="add" type="submit">ADD!</button>
            </form>
        </div>
    )
}

export default NewOwner