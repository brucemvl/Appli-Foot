import "../styles/Footer.scss"
import { Link } from "react-router-dom"
import bm from "../assets/bm.png"

function Footer(){
    return (
        <footer>
            <Link to="/contact">Nous contacter</Link>
            <div><img src={bm} alt="logo"/><p>© 2024 BM Development. Tous droits réservés.</p></div>


        </footer>
    )


}

export default Footer