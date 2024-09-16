import TableauEurope from "../components/TableauEurope";
import { useParams } from "react-router-dom"
import ClassementEurope from "../components/ClassementEurope.jsx";
import "../styles/FicheChampionnat.scss"


function FicheEurope({ setFilter }) {

    const { id } = useParams();
    //const league = leagues.find((league) => league.id === id)


    return (
        <div className="blocpage">
            <TableauEurope id={id} setFilter={setFilter} />
            <ClassementEurope id={id} />
        </div>
    )

}

export default FicheEurope