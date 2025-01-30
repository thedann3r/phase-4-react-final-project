import PlaneOwnerItems from "./Items"

function AirplaneList({planes,setPlanes}){
    return(
       <div id="container">
          {planes.length >0? planes.map(plane => (
            <PlaneOwnerItems 
            key={plane.id}
            id={plane.id}
            owners_id={plane.owners_id}
            planes_id={plane.planes_id}
            planes={planes}
            setPlanes={setPlanes}
            />
          )):null}
       </div>
    )
}

export default AirplaneList