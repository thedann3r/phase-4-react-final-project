import { useNavigate } from "react-router-dom"

function Contacts(){
  const navigate = useNavigate()
    return(
      <div id="contacts">
       <h1>Contacts</h1>  
           <div id="conts">
            <h2>You can give us your feedback via Watsapp, Instagram, Facebook or X</h2>
              <a href="https://wa.me/0768544929" target="_blank" rel="noopener noreferrer">
              <span className="fa-stack fa-lg">
              <i className="fa fa-whatsapp fa-stack-1x"></i>
              </span>
              WhatsApp <br />
              </a>

              <span className="fa-stack fa-lg">
              <i className="fa fa-facebook fa-stack-1x"></i>
              </span>
              Facebook <br />

              <a href="https://www.instagram.com/moi_c.est_onyango" target="_blank" rel="noopener noreferrer">
              <span className="fa-stack fa-lg">
              <i className="fa fa-instagram fa-stack-1x"></i>
              </span>
              Instagram <br />
              </a>

              <span className="fa-stack fa-lg">
              <i className="fa fa-twitter fa-stack-1x"></i>
              </span>
              Twitter <br />
           </div>
           <button onClick={() => navigate("/home")}>HOME!</button>
        </div>
    )
}
export default Contacts