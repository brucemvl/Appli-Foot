import Match from "./Match";
import React, {useState, useEffect} from "react";
import "../styles/Tableau.scss"

function Tableau(){
    const [team, setTeam] = useState([])

     useEffect(()=> {
        const fetchData = ()=>{
            try {
                 fetch("https://v3.football.api-sports.io/fixtures?league=61&season=2024", {
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
       fetchData();}, []

       )

    
        
       
        //.then((data)=> 
          //  console.log(data.response)
            //setMatch(data[0].response)
            
            //setJournee(data[0].response)
            //console.log(journee)
            
        

    return (
        <section>
            <ul className="tableau">
                {team.map(element=>
                <Match equipeDom={element.teams.home.name} equipeExt={element.teams.away.name} logoDom={element.teams.home.logo} logoExt={element.teams.away.logo} scoreDom={element.goals.home} scoreExt={element.goals.away} />

)}
            </ul>

        </section>
    )

}

export default Tableau