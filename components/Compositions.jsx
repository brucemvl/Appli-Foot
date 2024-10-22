import "../styles/Compositions.scss"

function Compositions({titulairesDom, titulairesExt, coachDom, coachExt, systemeDom, systemeExt}) {
    

    const range = [1, 2, 3, 4, 5]

   console.log( titulairesDom.map((element)=> element.statistics[0].goals.total))

return (
    <article>

        <h3>Compositions d'équipe</h3>
        <div className="joueurs">
            <ul className="joueurs__domicile">
                <h4>{systemeDom}</h4>
                {titulairesDom.map((element)=>
                <li>
                    <div>{element.player.name}</div> {range.map((x) => element.statistics[0].goals.total >= x ? <span>⚽</span> : null)} {element.statistics[0].cards.yellow >= 1 ? <span>🟨 </span> : ""}</li>
                )}
                <p>Coach: {coachDom}</p>
               
            </ul>
            <ul className="joueurs__ext">
                <h4>{systemeExt}</h4>
                {titulairesExt.map((element)=>
                <li>
                <div>{element.player.name}</div> {range.map((x) => element.statistics[0].goals.total >= x ? <span>⚽</span> : null)} {element.statistics[0].cards.yellow >= 1 ? <span>🟨 </span> : ""}</li>)}
                <p>Coach: {coachExt} </p>
            </ul>

        </div>
    </article>
)
}

export default Compositions