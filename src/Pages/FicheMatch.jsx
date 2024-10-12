import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from "../components/Details.jsx"
import "../styles/FicheMatch.scss"

const FicheMatch = () => {
    const [match, setMatch] = useState(null);


    const { id } = useParams()

    useEffect(() => {
        // Fetch data
        fetch(`https://v3.football.api-sports.io/fixtures?id=${id}`, {
            method: "GET",
            headers: {
                "x-rapidapi-key": "5ff22ea19db11151a018c36f7fd0213b",
                "x-rapidapi-host": "v3.football.api-sports.io",
            }
        })
            .then((response) => response.json())
            .then((result) => setMatch(result.response[0]))
            .catch((error) => console.error(error));
    }, [id]);

    console.log(match)

    if (!match) {
        return <div>Loading...</div>;
    }

    const round = match.league.round

    const roundd = round.slice(round.length -1)
    console.log(roundd)

    const date = new Date(match.fixture.date)

  const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
const formattedHour = `${date.getHours().toString().padStart(2, '0')}h${date.getMinutes().toString().padStart(2, '0')}`

const buteurs = match.events.filter((element) =>
    element.type === "Goal"
)

const buteurHome = buteurs.filter (function (buteur){
  return  buteur.team.name === match.teams.home.name
})

const buteurExt = buteurs.filter(function(buteur){
    return buteur.team.name === match.teams.away.name
})

const stats = match.statistics.filter((element)=>
element.statistics
)

const possession = stats.map((element)=>
element.statistics )

const poss = possession.map((element) => 
element.filter((element)=> element.type === "Ball Possession"))

console.log(stats)
console.log(poss)



console.log(buteurs)
console.log(buteurHome)
console.log(buteurExt)


    return (
        <div className='bloc'>
            <section>
            <div className="ligue"><p>{match.league.name} - Journee {roundd}</p></div>
        <div className="datelieu">
            <span>{formattedDate} - {formattedHour}</span>
            <span>{match.fixture.venue.name} , {match.fixture.venue.city}</span>
        </div>
        <div className="affiche">
            <div className='domicile'>
                <img src={match.teams.home.logo} alt={`logo ${match.teams.home.name}`} />
                <p>{match.teams.home.name}</p>
            </div>
            <div className='score'>
                <span>{match.goals.home}</span> - <span>{match.goals.away}</span>
            </div>
            <div className='exterieur'>
                <img src={match.teams.away.logo} alt={`logo ${match.teams.away.name}`} />
                <p>{match.teams.away.name}</p>
            </div>

        </div>
<Details buteurExt={buteurExt} buteurHome={buteurHome} buteurs={buteurs} possession={poss}/>
            {/* other rendering logic */}
            </section>
        </div>
    );
};

export default FicheMatch;