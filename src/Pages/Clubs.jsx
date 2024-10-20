import "../styles/Filtres.scss"
import { Link } from "react-router-dom"
import { championnats, europe, autres } from "../Datas/Leagues"

function Clubs() {


    return (
        <div className="blocClubs">
            <section className="competitions">
                <div className="conteneur">
                    <div className="title">
                        <h3>Championnats</h3>
                    </div>
                    <div className="filtres">
                        {championnats.map(({ name, id, logo, flag }) =>
                            <Link className="lien" to={`/FicheChampionnat/${id}`} key={"lien" + id}>
                                <img src={flag} alt={"drapeau" + id} className="flag" />
                                <h4>{name}</h4>
                                <article><img src={logo} alt="Logo du Championnat" /></article>
                            </Link>
                        )}

                        {autres.map(({ name, id, logo, flag }) =>
                            <Link className="lien" to={`/FicheChampionnat/${id}`} key={"lien" + id}>
                                <img src={flag} alt={"drapeau" + id} className="flag" />
                                <h4>{name}</h4>
                                <article><img src={logo} alt="Logo du Championnat" /></article>
                            </Link>
                        )
                        }
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
        </div>
    )
}

export default Clubs