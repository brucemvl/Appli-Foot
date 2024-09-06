import Tableau from "../components/Tableau"
import { useParams } from "react-router-dom"
import Classement from "../components/Classement";
//import { leagues } from "../Datas/Leagues";

function FicheChampionnat({setFilter}){

    const { id } = useParams();
    //const league = leagues.find((league) => league.id === id)


    return (
        <div>
        <Classement id={id} />
        <Tableau id={id} setFilter={setFilter}/>
        </div>
    )

}

export default FicheChampionnat