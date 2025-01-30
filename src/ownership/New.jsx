import { useState } from "react"

function NewOwnership({planes,setPlanes}){
    const [newPlane,setNewPlane] = useState({
        planes_id:0,
        owners_id:0
    })
    function handleChange(e){
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value

        setNewPlane({
            ...newPlane,
            [name]:value
        })
    }
    function handleSubmit(e){
       e.preventDefault()
       fetch("http://127.0.0.1:5000/planeowners", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newPlane)
       })
       .then(resp => resp.json())
       .then(poisson => {setPlanes([...planes,poisson])
        setNewPlane({
            planes_id:"",
            owners_id:0
        })
        alert('Created successfully!')
       })
       .catch(error => console.log(error))
    }
    return(
        <div id="newness">
          <h2>New Ownership</h2>
            <form id="new" onSubmit={handleSubmit}>
                <input className="input" type="number" name="planes_id" placeholder="planes_id" value={newPlane.planes_id} required onChange={handleChange}/>
                <input className="input" type="number" name="owners_id" placeholder="owners_id" value={newPlane.owners_id} required onChange={handleChange}/>
                <button id="add" type="submit">ADD!</button>
            </form>
        </div>
    )
}

export default NewOwnership