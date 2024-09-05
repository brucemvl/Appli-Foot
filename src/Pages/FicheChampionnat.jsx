import Tableau from "../components/Tableau"
import { useParams } from "react-router-dom"
//import { leagues } from "../Datas/Leagues";

function FicheChampionnat({setFilter}){

    const { id } = useParams();
    //const league = leagues.find((league) => league.id === id)


    return (

        <Tableau id={id} setFilter={setFilter}/>
    )

}

export default FicheChampionnat