import "../styles/Match.scss"

 function Match({equipeDom, equipeExt, logoDom, logoExt, scoreDom, scoreExt}){



return (
    <li className="match">
      <p className="match__equipeDom">{equipeDom}</p>
      <img className="match__logoDom" src={logoDom} alt="logo domicile" />
      <div className="match__score">
        <span className="match__score__dom">{scoreDom}</span>
        <span className="match__score__ext">{scoreExt}</span>
      </div>
      <img className="match__logoExt" src={logoExt} alt="logo exterieur" />
      <p className="match__equipeExt">{equipeExt}</p>

    </li>
)

}

export default Match