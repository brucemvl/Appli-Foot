import { useEffect, useState } from "react";
import "../styles/Live.scss"
import { Link } from "react-router-dom";

function Live(){

    const [live, setLive] = useState([])

    useEffect(()=> {
        const fetchData = ()=>{
            try {
                 fetch(`https://v3.football.api-sports.io/fixtures?live=2-61-140-39-78`, {
            method: "GET",
             headers: {
                "x-rapidapi-key": "5ff22ea19db11151a018c36f7fd0213b",
                "x-rapidapi-host": "v3.football.api-sports.io",
            }
        })
.then((response)=> response.json()) 
.then((json)=>{
    console.log(json)

    setLive(json.response)

})      
        
       }
       catch (error){
        console.error("error:", error)
       }};
       fetchData();}, []

       )

       return(
        <div className="live">
            <h3 className="titreLive">LIVE</h3>
            <article className="live__tableau">
            {live.map((element)=> 
            <Link className="lienMatch" to={`/FicheMatch/${element.fixture.id}`}>
            <li className="live__match">
                <img src={element.league.logo} className="match__competition" alt="logo competition" />
            <p className="match__equipeDom">{element.teams.home.name}</p>
            <img className="match__logoDom" src={element.teams.home.logo} alt="logo domicile" />
            { element.goals.home === element.goals.away ? <div className="match__score">
              <span className="nul">{element.goals.home}</span>
              <div className="time"><em>{element.fixture.status.elapsed}'</em></div>
              <span className="nul">{element.goals.away}</span>
            </div> :
            <div className="match__score">
              { element.goals.home > element.goals.away ? <span className="winner">{element.goals.home}</span> : <span className="looser">{element.goals.home}</span>}
             { element.goals.away > element.goals.home ? <span className="winner">{element.goals.away}</span> : <span className="looser">{element.goals.away}</span>}
            </div>}
            <img className="match__logoExt" src={element.teams.away.logo} alt="logo exterieur" />
            <p className="match__equipeExt">{element.teams.away.name}</p>
            <h4 className="sticker__live">Live</h4>
      
          </li>
          </Link>
        
       )
}
</article>
</div>
       )
    }

export default Live