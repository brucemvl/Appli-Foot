import "../styles/Compositions.scss"

function Compositions({titulairesDom, titulairesExt}) {
    

return (
    <article>

        <h3>Compositions d'équipe</h3>
        <div className="joueurs">
            <ul className="joueurs__domicile">
                {titulairesDom.map((element)=>
                <li>{element.player.name}</li>)}
               
            </ul>
            <ul className="joueurs__ext">
                {titulairesExt.map((element)=>
                <li>{element.player.name}</li>)}
            </ul>

        </div>
    </article>
)
}

export default Compositions