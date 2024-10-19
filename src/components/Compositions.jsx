import "../styles/Compositions.scss"

function Compositions({titulairesDom, titulairesExt, coachDom, coachExt, systemeDom, systemeExt}) {
    

return (
    <article>

        <h3>Compositions d'équipe</h3>
        <div className="joueurs">
            <ul className="joueurs__domicile">
                <h4>{systemeDom}</h4>
                {titulairesDom.map((element)=>
                <li>{element.player.name}</li>)}
                <p>Coach: {coachDom}</p>
               
            </ul>
            <ul className="joueurs__ext">
                <h4>{systemeExt}</h4>
                {titulairesExt.map((element)=>
                <li>{element.player.name}</li>)}
                <p>Coach: {coachExt} </p>
            </ul>

        </div>
    </article>
)
}

export default Compositions