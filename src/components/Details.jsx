import "../styles/Details.scss"

function Details({buteurHome, buteurExt}){

return (
    <article>
        <h3>Match en details</h3>
        <div className="fiche">
            <div className="equipeDomicile">{buteurHome.map((element)=> <li><i class="fa-regular fa-futbol"></i> {element.player.name}, {element.time.elapsed}' {element.time.extra ? ` + ${element.time.extra}` : null} </li>)}</div>
            <div className="equiqueExt">{buteurExt.map((element)=> <li><i class="fa-regular fa-futbol"></i> {element.player.name}, {element.time.elapsed}' </li>)}</div>
        </div>

    </article>
)
}

export default Details