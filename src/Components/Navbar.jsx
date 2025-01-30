import { Link } from "react-router-dom" 

function Navbar(){
    return(
        <>
          <nav id="navigation">
             <Link className="link" to="./home">Home</Link>  
             {/* <Link classname="link" to="./app">App</Link>   */}
             <Link classname="link" to="./company">Company</Link>
             <Link classname="link" to="./planes">Airplanes</Link>
             <Link classname="link" to="./owners">Owners</Link>
             <Link classname="link" to="./contacts">Contacts</Link> 
          </nav>      
        </>
    )
}
export default Navbar