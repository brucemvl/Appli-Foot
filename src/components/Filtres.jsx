import { Link } from "react-router-dom"
import { championnats } from "../Datas/Leagues"
import { europe } from "../Datas/Leagues"
import "../styles/Filtres.scss"


function Filtres() {


    return (
        <section className="competitions">
            <div className="championnats">
                {championnats.map(({ name, id, logo }) =>
                    <Link className="lien" to={`/FicheChampionnat/${id}`} key={"lien" + id}>
                        <p>{name}</p>
                        <article><img src={logo} alt="Logo du Championnat" /></article>
                    </Link>
                )}
            </div>
            <div className="europe">

                {europe.map(({ name, id, logo }) =>
                    <Link className="lien" to={`/FicheChampionnat/${id}`} key={"lien" + id}>
                        <p className="europeText">{name}</p>
                        <article><img src={logo} alt="Logo du Championnat" /></article>
                    </Link>
                )}

            </div>
        </section>
    )
}

export default Filtres