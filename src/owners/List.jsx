import OwnerItems from "./Items"

function OwnerList({owners,setOwners}){
    return(
       <div id="container">
          {owners.length >0? owners.map(plane => (
            <OwnerItems 
            key={plane.id}
            id={plane.id}
            name={plane.name}
            owners={owners}
            setOwners={setOwners}
            />
          )):null}
       </div> 
    )
}

export default OwnerList