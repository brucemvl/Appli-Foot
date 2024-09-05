import { Link } from "react-router-dom"
import { leagues } from "../Datas/Leagues"
import "../styles/Filtres.scss"


function Filtres(){


return (

    <section className="championnats">
        <ul className="championnats__liste">
           {leagues.map(({name, id, logo}) =>
            <Link className="lien" to={`/FicheChampionnat/${id}`}key={"lien"+id}>
                <li><img src={logo} alt="Logo du Championnat"/></li>
            </Link>
            )}  
        </ul>
    </section>
)
}

export default Filtres