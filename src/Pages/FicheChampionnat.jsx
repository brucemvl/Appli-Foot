import Tableau from "../components/Tableau"
import { useParams } from "react-router-dom"
import "../styles/FicheChampionnat.scss"
import ClassementChampionnat from "../components/ClassementChampionnat";


function FicheChampionnat({ setFilter }) {

    const { id } = useParams();
    //const league = leagues.find((league) => league.id === id)


    return (
        <div className="blocpage">
            <Tableau id={id} setFilter={setFilter} />
            <ClassementChampionnat id={id} />
        </div>
    )

}

export default FicheChampionnat