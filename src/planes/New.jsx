import { useState } from "react"

function NewPlane({planes,setPlanes}){
    const [newPlane,setNewPlane] = useState({
        name:"",
        planeCompany_id:0
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
       fetch("https://phase-4-final-project-7azq.onrender.com/planes", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newPlane)
       })
       .then(resp => resp.json())
       .then(poisson => {setPlanes([...planes,poisson])
        setNewPlane({
            name:"",
            planeCompany_id:0
        })
        alert(`Poof ${newPlane.name} created with success`)
       })
       .catch(error => console.log(error))
    }
    return(
        <div className="newness">
          <h2 className="newer">New Company</h2>
            <form id="new" onSubmit={handleSubmit}>
                <input className="new" type="text" name="name" placeholder="Name" value={newPlane.name} required onChange={handleChange}/>
                <input className="new" type="number" name="planeCompany_id" placeholder="planeCompany_id" value={newPlane.planeCompany_id} required onChange={handleChange}/>
                <button className="add" type="submit">Add</button>
            </form>
        </div>
    )
}
 
export default NewPlane