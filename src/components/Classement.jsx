import { useState, useEffect } from "react";

function Classement({id}){

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

       console.log(tab)

       return (
        <section className="classement">
            <ul>
                {tab.map((element)=>
                <li className="equipe">
                    <div>{element.rank}</div>
                    <img src={element.team.logo} />
                    <div>{element.team.name}</div></li>
                )}
            </ul>


        </section>
       )
}

export default Classement