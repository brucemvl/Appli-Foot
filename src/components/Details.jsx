import "../styles/Details.scss"

function Details({possession, expectedGoals, tirs, tirsCadres, jaune, rouge}){
    

return (
    <article>
        <h3>Match en details</h3>
        <div className="statistiques">
            <div className="statistiques__possession"> <p>{possession[0][0].value}</p><span>Possession</span><p>{possession[1][0].value}</p></div>
            <div className="statistiques__expectedgoals"> <p>{expectedGoals[0][0].value}</p><span>Expected Goals</span><p>{expectedGoals[1][0].value}</p></div>
            <div className="statistiques__tirs"> <p>{tirs[0][0].value} ({tirsCadres[0][0].value})</p><span>Tirs (cadrés)</span><p>{tirs[1][0].value} ({tirsCadres[1][0].value})</p></div>
            <div className="statistiques__jaune"> <p>{jaune[0][0].value}</p><span>Cartons jaune</span><p>{jaune[1][0].value}</p></div>
            <div className="statistiques__rouge"> <p>{rouge[0][0].value === null ? "0" : rouge[0][0].value}</p><span>Cartons rouge</span><p>{rouge[1][0].value === null ? "0" : rouge[1][0].value}</p></div>

        </div>

    </article>
)
}

export default Details