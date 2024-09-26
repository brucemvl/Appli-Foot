import { useParams } from "react-router-dom"
import Affiche from "../components/affiche"

function FicheMatch( {equipeExt}){
    const {id} = useParams()
    const {equipeDom} = useParams()
    console.log(equipeDom)
    console.log(equipeExt)
    console.log(id)

    

/*
return (
<section className="affiche">
    <div className="affiche__ligue">
        <p className="ligue"></p>
        <img src={affiche.league.logo} alt="logo ligue" />
    </div>
    <div className="affiche__score">
    <p className="affiche__equipeDom">{affiche.teams.home.name}</p>
      <img className="affiche__logoDom" src={affiche.teams.home.logo} alt="logo domicile" />
      { affiche.goals.home === affiche.goals.away ? <div className="match__score">
        <span className="nul">{affiche.goals.home}</span>
        <span className="nul">{affiche.goals.away}</span>
      </div> :
      <div className="affiche__score">
        { affiche.goals.home > affiche.goals.away ? <span className="winner">{affiche.goals.home}</span> : <span className="looser">{affiche.goals.home}</span>}
       { affiche.goals.away > affiche.goals.home ? <span className="winner">{affiche.goals.away}</span> : <span className="looser">{affiche.goals.away}</span>}
      </div>}
      <img className="affiche__logoExt" src={affiche.teams.away.logo} alt="logo exterieur" />
      <p className="affiche__equipeExt">{affiche.teams.away.name}</p>

    </div>
    <div className="affiche__infos">
        <p className="date"></p>
        <p className="stade"></p>
        <p className="arbitre"></p>
    </div>

</section>

)
*/

return (
    <div>
        <Affiche id={id} />
    </div>
)

}

export default FicheMatch