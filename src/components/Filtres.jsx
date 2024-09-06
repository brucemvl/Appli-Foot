import { Link } from "react-router-dom"
import { championnats } from "../Datas/Leagues"
import { europe } from "../Datas/Leagues"
import "../styles/Filtres.scss"


function Filtres() {


    return (
        <section className="competitions">
            <div className="conteneur">
                <div className="title">
                <h2>Championnats</h2>
                </div>
                <div className="filtres">
                {championnats.map(({ name, id, logo }) =>
                    <Link className="lien" to={`/FicheChampionnat/${id}`} key={"lien" + id}>
                        <h3>{name}</h3>
                        <article><img src={logo} alt="Logo du Championnat" /></article>
                    </Link>
                )}
                </div>
            </div>
            <div className="conteneur">
                <div className="title">
                <h2>Competitions Européennes</h2>
                </div>
                <div className="filtres">
                {europe.map(({ name, id, logo }) =>
                    <Link className="lien" to={`/FicheChampionnat/${id}`} key={"lien" + id}>
                        <h3 className="europeText">{name}</h3>
                        <article><img src={logo} alt="Logo du Championnat" /></article>
                    </Link>
                )}
                </div>

            </div>
        </section>
    )
}

export default Filtres