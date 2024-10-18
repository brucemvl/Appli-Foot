import Match from "./Match";
import React, { useState, useEffect } from "react";
import "../styles/Tableau.scss"
import Journees from "./Journees";

function Tableau({ id }) {

    const [team, setTeam] = useState([])

    useEffect(() => {
        const fetchData = () => {
            try {
                fetch(`https://v3.football.api-sports.io/fixtures?league=${id}&season=2024`, {
                    method: "GET",
                    headers: {
                        "x-rapidapi-key": "5ff22ea19db11151a018c36f7fd0213b",
                        "x-rapidapi-host": "v3.football.api-sports.io",
                    }
                })
                    .then((response) => response.json())
                    .then((json) => {
                        console.log(json.response)

                        setTeam(json.response)
                    })
            }
            catch (error) {
                console.error("error:", error)
            }
        };
        fetchData();
    }, [id]

    )

    const round = team.reduce(
        (acc, elem) =>
            acc.includes(elem.league.round) ? acc : acc.concat(elem.league.round),
        []
    )


    const [filter, setFilter] = useState(round)

    const [currentRound, setCurrentRound] = useState("")

    useEffect(() => {
        const fetchRound = () => {
            try {
                fetch(`https://v3.football.api-sports.io/fixtures/rounds?season=2024&league=${id}&current=true`, {
                    method: "GET",
                    headers: {
                        "x-rapidapi-key": "5ff22ea19db11151a018c36f7fd0213b",
                        "x-rapidapi-host": "v3.football.api-sports.io",
                    }
                })
                    .then((response) => response.json())
                    .then((json) => {
                        console.log(json.response[0])
                        setCurrentRound(json.response[0])
                    })

            }
            catch (error) {
                console.error("error:", error)
            }
        };
        fetchRound();
    }, [id]

    )

    const currentIndex = round.indexOf(currentRound);

    return (
        <section className="calendrierEtResultats">
            <h3>Calendrier et Resultats</h3>
            <Journees setFilter={setFilter} round={round} filter={filter} id={id} team={team} currentIndex={currentIndex} />
            <ul className="tableau">
                {team.map(element => !filter || filter === element.league.round ?



                    <Match equipeDom={element.teams.home.name} id={element.fixture.id} equipeExt={element.teams.away.name} logoDom={element.teams.home.logo} round={element.league.round} logoExt={element.teams.away.logo} scoreDom={element.goals.home} scoreExt={element.goals.away} date={element.fixture.date} key={"match" + element.fixture.id} /> : null

                )}
            </ul>

        </section>
    )

}

export default Tableau