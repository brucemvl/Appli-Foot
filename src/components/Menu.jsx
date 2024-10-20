import { useState } from "react"
import "../styles/Menu.scss"
import { NavLink } from "react-router-dom"

function Menu() {

    const [active, setActive] = useState("actif")

    const anim = () => {
        setActive(!active)
    }

    return (
        <div className="blocMenu">
            {active ?
                <div>
                    <div className="navMenu" onClick={anim}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className="menu inactive"></nav>
                </div>
                :
                <div>
                    <div className="navMenu active" onClick={anim}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className="menu">
                        <ul>
                           <NavLink to="/"><li>Accueil</li></NavLink> 
                           <NavLink to="/travaux"><li>Live</li></NavLink> 
                           <NavLink to="/Clubs"><li>Clubs</li></NavLink>
                           <NavLink to="/"><li>Selections</li></NavLink> 

                        </ul>
                    </nav>
                </div>

            }
        </div>
    )

}

export default Menu