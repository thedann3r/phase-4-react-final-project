import { useNavigate } from "react-router-dom"

function Home(){
const navigate = useNavigate()
    return(
        <>
         <div className="opener">
            <section id="homeS">
                <h1 className="mainH">🛫Home🛫</h1> 
                <h2 id="opener">
                Welcome aboard! Our app is your go-to destination for exploring the world of aviation. Discover a wide 
                range of plane companies, their fleets, and the incredible planes that keep the skies soaring. Whether 
                you're curious about the history behind each airline or eager to learn about the cutting-edge aircraft 
                in service today, we've got you covered. From commercial giants to niche specialists, this app offers
                a detailed look into the planes, their uses, and the companies that make it all happen. Ready to take
                off into the world of aviation? Let’s fly!</h2>
            </section>
         </div>
          <button  id="homeB" onClick={() => navigate("/company")}>👉🏽😏👉🏽</button>  
        </>
    )
}
export default Home