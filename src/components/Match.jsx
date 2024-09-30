import "../styles/Match.scss"
import { useState } from "react"

 function Match({equipeDom, equipeExt, logoDom, logoExt, scoreDom, scoreExt, id}){

  const [modal, setModal] = useState(false)

 
const openModal = ()=>{
  setModal(!modal)
}


console.log(modal)
return (
    <li className="match" onClick={openModal}>
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

      {modal && <div className="modal">
        <div className="modal__header">
          <h4>Details Match</h4>
          <i class="fa-solid fa-xmark" ></i>
        </div>
        <p>{equipeDom}</p>
      </div> }
    </li>
    
    
    
)

}

export default Match