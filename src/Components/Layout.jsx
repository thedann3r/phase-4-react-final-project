import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

function Layout(){
    return(
        <div id="navvs">
          <Navbar /> 
          <div>
             <Outlet />
             < Home />
          </div>      
        </div>
    )
}
export default Layout