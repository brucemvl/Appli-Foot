import { Link } from "react-router-dom"
import { championnats } from "../Datas/Leagues"
import { europe } from "../Datas/Leagues"
import "../styles/Filtres.scss"


function Filtres() {


    return (
        <section className="competitions">
            <div className="conteneur">
                <div className="title">
                <h3>Championnats</h3>
                </div>
                <div className="filtres">
                {championnats.map(({ name, id, logo }) =>
                    <Link className="lien" to={`/FicheChampionnat/${id}`} key={"lien" + id}>
                        <h4>{name}</h4>
                        <article><img src={logo} alt="Logo du Championnat" /></article>
                    </Link>
                )}
                </div>
            </div>
            <div className="conteneur">
                <div className="title">
                <h3>Competitions Européennes</h3>
                </div>
                <div className="filtres">
                {europe.map(({ name, id, logo }) =>
                    <Link className="lienEurope" to={`/FicheEurope/${id}`} key={"lien" + id}>
                        <article><img src={logo} alt="Logo du Championnat" /></article>
                    </Link>
                )}
                </div>

            </div>
        </section>
    )
}

export default Filtres