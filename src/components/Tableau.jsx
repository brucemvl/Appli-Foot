import Match from "./Match";
import React, {useState, useEffect} from "react";
import "../styles/Tableau.scss"
import Journees from "./Journees";

function Tableau({id}){
    const [team, setTeam] = useState([])


    const round = team.reduce(
        (acc, elem) =>
            acc.includes(elem.league.round) ? acc : acc.concat(elem.league.round),
            []
    )

     useEffect(()=> {
        const fetchData = ()=>{
            try {
                 fetch(`https://v3.football.api-sports.io/fixtures?league=${id}&season=2024`, {
            method: "GET",
             headers: {
                "x-rapidapi-key": "5ff22ea19db11151a018c36f7fd0213b",
                "x-rapidapi-host": "v3.football.api-sports.io",
            }
        })
.then((response)=> response.json()) 
.then((json)=>{
    console.log(json.response)

    setTeam(json.response)
})      
        
       }
       catch (error){
        console.error("error:", error)
       }};
       fetchData();}, [id]

       )

       const [filter, setFilter] = useState("")

console.log(filter)
console.log(round[0])

    return (
        <section>
            <Journees setFilter={setFilter} round={round} filter={filter}/>
            <ul className="tableau">
                {team.map(element=> !filter || filter === element.league.round ?
                <Match equipeDom={element.teams.home.name} equipeExt={element.teams.away.name} logoDom={element.teams.home.logo} round={element.league.round} logoExt={element.teams.away.logo} scoreDom={element.goals.home} scoreExt={element.goals.away} key={"match" + element.fixture.id} /> : null

)}
            </ul>

        </section>
    )

}

export default Tableau