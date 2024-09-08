import { useState, useEffect } from "react";
import "../styles/Classement.scss"

function Classement({id}){

    const [tab, setTab] = useState([])
    const [joueurs, setJoueurs] = useState([])


    useEffect(()=> {
        const fetchData = ()=>{
            try {
                 fetch(`https://v3.football.api-sports.io/standings?league=${id}&season=2024`, {
            method: "GET",
             headers: {
                "x-rapidapi-key": "5ff22ea19db11151a018c36f7fd0213b",
                "x-rapidapi-host": "v3.football.api-sports.io",
            }
        })
.then((response)=> response.json()) 
.then((json)=>{
    console.log(json.response[0].league.standings[0])

    setTab(json.response[0].league.standings[0])
})      
        
       }
       catch (error){
        console.error("error:", error)
       }};
       fetchData();}, [id]

       )

       console.log(tab)


        
        useEffect(()=> {
            const fetchStats = ()=>{
                try {
                     fetch(`https://v3.football.api-sports.io/players/topscorers?league=${id}&season=2024`, {
                method: "GET",
                 headers: {
                    "x-rapidapi-key": "5ff22ea19db11151a018c36f7fd0213b",
                    "x-rapidapi-host": "v3.football.api-sports.io",
                }
            })
    .then((response)=> response.json()) 
    .then((json)=>{
        console.log(json.response)
    
        setJoueurs(json.response)

    })      
            
           }
           catch (error){
            console.error("error:", error)
           }};
           fetchStats();}, [id]
    
           )


       return (
        <section className="classementEtStats">
            <article className="classement">
                <div className="barre">
                    <div>Rang</div>
                    <div>Equipe</div>
                    <div>MJ</div>
                    <span>Points</span>
                </div>
                <ul>
                    {tab.map((element)=>
                    <li className="equipe">
                        <div>{element.rank}</div>
                        <img src={element.team.logo} alt="logo equipe" />
                        <p>{element.team.name}</p>
                        <div>{element.all.played}</div>
                        <span>{element.points}</span>
                        </li>
                    )}
                </ul>
            </article>
            <aside className="buteurs">
            <div className="barreButeurs">
                    <div>Joueur</div>
                    <div>Buts</div>
                    <div>Matchs</div>
                </div>
                <ul>
                {joueurs.map((element)=> 
                    <li className="joueur">
                        <img src={element.statistics[0].team.logo} alt="logo team"/>
                        <img src={element.player.photo} alt="player"/>
                        <p>{element.player.name}</p>
                        <span>{element.statistics[0].goals.total}</span>
                        <div>{element.statistics[0].games.appearences}</div>

                    </li>
                    )}
                </ul>
            </aside>


        </section>
       )
}

export default Classement