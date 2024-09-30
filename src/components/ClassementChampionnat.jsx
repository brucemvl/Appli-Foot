import { useState, useEffect } from "react";
import "../styles/Classement.scss"

function ClassementChampionnat({id}){

    const [openButeurs, setOpenButeurs] = useState(false)
    const [openPasseurs, setOpenPasseurs] = useState(false)
    const [openClassement, setOpenClassement] = useState(false)
    const [rotateButeurs, setRotationB] = useState(true)
    const [rotatePasseurs, setRotationP] = useState(true)
    const [rotateClassement, setRotationC] = useState(true)


    const collapseClassement =()=>{
        setOpenClassement(!openClassement)
        setRotationC(!rotateClassement)
    }

    const collapseButeurs=()=>{
        setOpenButeurs(!openButeurs)
        setRotationB(!rotateButeurs)
    }

    const collapsePasseurs =()=>{
        setOpenPasseurs(!openPasseurs)
        setRotationP(!rotatePasseurs)
    }

    //CLASSEMENT

    const [tab, setTab] = useState([])


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


       //CLASSEMENT BUTEURS

       const [buteurs, setButeurs] = useState([])
        
        useEffect(()=> {
            const fetchButeurs = ()=>{
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
        
        console.log(json.response.slice(0,10))
    
        setButeurs(json.response.slice(0,10))

    })      
            
           }
           catch (error){
            console.error("error:", error)
           }};
           fetchButeurs();}, [id]
    
           )

           //CLASSEMENT PASSEURS

           const [passeurs, setPasseurs] = useState([])

           useEffect(()=> {
            const fetchPasseurs = ()=>{
                try {
                     fetch(`https://v3.football.api-sports.io/players/topassists?league=${id}&season=2024`, {
                method: "GET",
                 headers: {
                    "x-rapidapi-key": "5ff22ea19db11151a018c36f7fd0213b",
                    "x-rapidapi-host": "v3.football.api-sports.io",
                }
            })
    .then((response)=> response.json()) 
    .then((json)=>{
        
        console.log(json.response.slice(0,10))
    
        setPasseurs(json.response.slice(0,10))

    })      
            
           }
           catch (error){
            console.error("error:", error)
           }};
           fetchPasseurs();}, [id]
    
           )

       return (
        <section className="classementEtStats">
            <article className="classement">
            <div className="titreCollapse"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/leaderboard.png" className="titreCollapse__logo" alt="leaderboard"/><h3>Classement</h3> {rotateClassement ? <i class="fa-solid fa-chevron-down" onClick={collapseClassement}></i> : <i class="fa-solid fa-chevron-down active" onClick={collapseClassement}></i> }</div>
            {openClassement ?

            <div className="dropdown">
                <div className="barre">
                    <div>Rang</div>
                    <div>Equipe</div>
                    <div>J</div>
                    <div>V</div>
                    <div>N</div>
                    <div>D</div>
                    <div>BP</div>
                    <div>BC</div>
                    <div>Points</div>
                </div>
                <ul>
                    {tab.map((element)=>
                    <li className="equipe" key={"champ" + element.team.id}>
                        <div>{element.rank}</div>
                        <img src={element.team.logo} alt="logo equipe" />
                        <p>{element.team.name}</p>
                        <div>{element.all.played}</div>
                        <div>{element.all.win}</div>
                        <div>{element.all.draw}</div>
                        <div>{element.all.lose}</div>
                        <div>{element.all.goals.for}</div>
                        <div>{element.all.goals.against}</div>
                        <span>{element.points}</span>
                        </li>
                    )}
                </ul>
                </div>
                : <div className="dropdown inactive">
                <div className="barre">
                    <div>Rang</div>
                    <div>Equipe</div>
                    <div>J</div>
                    <div>V</div>
                    <div>N</div>
                    <div>D</div>
                    <div>BP</div>
                    <div>BC</div>
                    <div>Points</div>
                </div>
                <ul>
                    {tab.map((element)=>
                    <li className="equipe" key={"champ" + element.team.id}>
                        <div>{element.rank}</div>
                        <img src={element.team.logo} alt="logo equipe" />
                        <p>{element.team.name}</p>
                        <div>{element.all.played}</div>
                        <div>{element.all.win}</div>
                        <div>{element.all.draw}</div>
                        <div>{element.all.lose}</div>
                        <div>{element.all.goals.for}</div>
                        <div>{element.all.goals.against}</div>
                        <span>{element.points}</span>
                        </li>
                    )}
                </ul>
                </div>
}
            </article>
            <div className="statistiques">
            <aside className="statistiques__joueurs">
               <div className="titreCollapse"><img width="64" height="64" className="titreCollapse__logo" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/football-goal.png" alt="football-goal"/><h3>Meilleurs Buteurs</h3> {rotateButeurs ? <i class="fa-solid fa-chevron-down" onClick={collapseButeurs}></i> : <i class="fa-solid fa-chevron-down active" onClick={collapseButeurs}></i> }</div>
                {openButeurs ?
                <div className="dropdown">
            <div className="barreButeurs">
                    <div>Joueur</div>
                    <div>Buts</div>
                    <div>Matchs</div>
                </div>
                <ul>
                {buteurs.map((element)=> 
                    <li className="buteur">
                        <div className="joueur__infos">
                        <span>{element.player.name}</span>
                        <div className="joueur__infos__equipe">
                        <img src={element.statistics[0].team.logo} alt="logo team"/>
                        <p>{element.statistics[0].team.name}</p>
                        </div>                      
                        </div>
                        <span>{element.statistics[0].goals.total}</span>
                        <div>{element.statistics[0].games.appearences}</div>

                    </li>
                    )}
                </ul>
                </div>
                : <div className="dropdown inactive">
                <div className="barreButeurs">
                        <div>Joueur</div>
                        <div>Buts</div>
                        <div>Matchs</div>
                    </div>
                    <ul>
                    {buteurs.map((element)=> 
                        <li className="buteur">
                            <div className="joueur__infos">
                            <span>{element.player.name}</span>
                            <div className="joueur__infos__equipe">
                            <img src={element.statistics[0].team.logo} alt="logo team"/>
                            <p>{element.statistics[0].team.name}</p>
                            </div>                      
                            </div>
                            <span>{element.statistics[0].goals.total}</span>
                            <div>{element.statistics[0].games.appearences}</div>
    
                        </li>
                        )}
                    </ul>
                    </div>
}
            </aside>

            <aside className="statistiques__joueurs">
               <div className="titreCollapse"><img width="50" height="50" className="titreCollapse__logo" src="https://img.icons8.com/ios-filled/50/FFFFFF/goal--v1.png" alt="goal--v1"/><h3>Meilleurs Passeurs</h3> {rotatePasseurs ? <i class="fa-solid fa-chevron-down" onClick={collapsePasseurs}></i> : <i class="fa-solid fa-chevron-down active" onClick={collapsePasseurs}></i> }</div>
                {openPasseurs ?
                <div className="dropdown">
            <div className="barrePasseurs">
                    <div>Joueur</div>
                    <div>Passes dec.</div>
                    <div>Matchs</div>
                </div>
                <ul>
                {passeurs.map((element)=> 
                    <li className="passeur">
                        <div className="joueur__infos">
                        <span>{element.player.name}</span>
                        <div className="joueur__infos__equipe">
                        <img src={element.statistics[0].team.logo} alt="logo team"/>
                        <p>{element.statistics[0].team.name}</p>
                        </div>                      
                        </div>
                        <span>{element.statistics[0].goals.assists}</span>
                        <div>{element.statistics[0].games.appearences}</div>

                    </li>
                    )}
                </ul>
                </div>
                : <div className="dropdown inactive">
                <div className="barrePasseurs">
                        <div>Joueur</div>
                        <div>Passes dec.</div>
                        <div>Matchs</div>
                    </div>
                    <ul>
                    {passeurs.map((element)=> 
                        <li className="passeur">
                            <div className="joueur__infos">
                            <span>{element.player.name}</span>
                            <div className="joueur__infos__equipe">
                            <img src={element.statistics[0].team.logo} alt="logo team"/>
                            <p>{element.statistics[0].team.name}</p>
                            </div>                      
                            </div>
                            <span>{element.statistics[0].goals.assists}</span>
                            <div>{element.statistics[0].games.appearences}</div>
    
                        </li>
                        )}
                    </ul>
                    </div>
              
}
            </aside>
            </div>


        </section>
       )
}

export default ClassementChampionnat