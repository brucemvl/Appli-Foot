import Tableau from "../components/Tableau"
import { useParams } from "react-router-dom"
//import { leagues } from "../Datas/Leagues";

function FicheChampionnat(){

    const { id } = useParams();
    //const league = leagues.find((league) => league.id === id)


    return (

        <Tableau id={id} />
    )

}

export default FicheChampionnat