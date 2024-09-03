import { Link } from "react-router-dom"
import { leagues } from "../Datas/Leagues"


function Filtre(){


return (

    <div className="championnats">
        <ul>
           {leagues.map(({name, id}) =>
       <Link className="lien" to={`/FicheChampionnat/${id}`} ><li>{name}</li></Link>
        )}
        </ul>
    </div>
)
}

export default Filtre