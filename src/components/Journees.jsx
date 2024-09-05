function Journees({setFilter, filter, round}){

    /*const journee = round /* team.reduce(
        (acc, elem) =>
            acc.includes(elem.league.round) ? acc : acc.concat(elem.league.round),
            []
)*/
console.log(filter)
    return (

        <div>
                <ul>
                    {round.map((element)=>
                    <li key={"journee" + element} value={element} onClick={()=> setFilter(element)} >{element}</li>)}
                </ul>
            </div>
    )
}

export default Journees