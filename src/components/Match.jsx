import "../styles/Match.scss"
import { Link } from "react-router-dom"

function Match({ equipeDom, equipeExt, logoDom, logoExt, scoreDom, scoreExt, id, date }) {

const dateh = new Date(date)
  const formattedDate = `${dateh.getDate().toString().padStart(2, '0')}/${(dateh.getMonth() + 1).toString().padStart(2, '0')}`
const formattedHour = `${dateh.getHours().toString().padStart(2, '0')}h${dateh.getMinutes().toString().padStart(2, '0')}`

  return (
    <Link to={`/FicheMatch/${id}`} equipeDom={equipeDom}>

      <li className="match" >
        <div className="dateheure"><em>{formattedDate}</em><em>{formattedHour}</em></div>
        <p className="match__equipeDom">{equipeDom}</p>
        <img className="match__logoDom" src={logoDom} alt="logo domicile" />
        {scoreDom === scoreExt ? <div className="match__score">
          <span className="nul">{scoreDom}</span>
          <span className="nul">{scoreExt}</span>
        </div> :
          <div className="match__score">
            {scoreDom > scoreExt ? <span className="winner">{scoreDom}</span> : <span className="looser">{scoreDom}</span>}
            {scoreExt > scoreDom ? <span className="winner">{scoreExt}</span> : <span className="looser">{scoreExt}</span>}
          </div>}
        <img className="match__logoExt" src={logoExt} alt="logo exterieur" />
        <p className="match__equipeExt">{equipeExt}</p>
      </li> </Link>

  )

}

export default Match