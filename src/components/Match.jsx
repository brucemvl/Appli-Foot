import "../styles/Match.scss"

 function Match({equipeDom, equipeExt, logoDom, logoExt, scoreDom, scoreExt, date, round}){

 


return (
    <li className="match">
      <p className="match__equipeDom">{equipeDom}</p>
      <img className="match__logoDom" src={logoDom} alt="logo domicile" />
      { scoreDom === scoreExt ? <div className="match__score">
        <span className="nul">{scoreDom}</span>
        <span className="nul">{scoreExt}</span>
      </div> :
      <div className="match__score">
        { scoreDom > scoreExt ? <span className="winner">{scoreDom}</span> : <span className="looser">{scoreDom}</span>}
       { scoreExt > scoreDom ? <span className="winner">{scoreExt}</span> : <span className="looser">{scoreExt}</span>}
      </div>}
      <img className="match__logoExt" src={logoExt} alt="logo exterieur" />
      <p className="match__equipeExt">{equipeExt}</p>

    </li>
)

}

export default Match