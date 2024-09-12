import Tableau from "../components/Tableau"
import { useParams } from "react-router-dom"
import Classement from "../components/Classement";
import "../styles/FicheChampionnat.scss"


function FicheChampionnat({ setFilter }) {

    const { id } = useParams();
    //const league = leagues.find((league) => league.id === id)


    return (
        <div className="blocpage">
            <Tableau id={id} setFilter={setFilter} />
            <Classement id={id} />
        </div>
    )

}

export default FicheChampionnat