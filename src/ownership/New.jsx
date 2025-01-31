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
       fetch("https://phase-4-final-project-7azq.onrender.com/ownership", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newPlane)
       })
       .then(resp => resp.json())
       .then(poisson => {setPlanes([...planes,poisson])
        setNewPlane({
            planes_id:0,
            owners_id:0
        })
        alert('Created successfully!')
       })
       .catch(error => console.log(error))
    }
    return(
        <div className="newness">
          <h2 className="newer">New Ownership</h2>
            <form id="new" onSubmit={handleSubmit}>
            <label className="label">owner id: </label>
                <input className="new"  type="number" name="owners_id" placeholder="owners_id" value={newPlane.owners_id} required onChange={handleChange}/>
            <label className="label">plane id: </label>   
                <input className="new"  type="number" name="planes_id" placeholder="planes_id" value={newPlane.planes_id} required onChange={handleChange}/>
                <button className="add" type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewOwnership