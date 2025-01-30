import AirplaneItems from "./Items"
function AirplaneList({planes,setPlanes}){
    return(
       <div id="container">
          {planes.length >0? planes.map(plane => (
            <AirplaneItems 
            key={plane.id}
            id={plane.id}
            name={plane.name}
            planeCompany_id={plane.planeCompany_id}
            planes={planes}
            setPlanes={setPlanes}
            />
          )):null}
       </div>
    )
}

export default AirplaneList 