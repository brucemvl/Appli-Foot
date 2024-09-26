import { useState, useEffect } from "react";

function Affiche({id}){

    const [affich, setAffiche] = useState()
    // STATISTIQUES MATCH
    useEffect(()=> {
        const fetchS = ()=>{
            try {
                 fetch(`https://v3.football.api-sports.io/fixtures?id=${id}`, {
            method: "GET",
             headers: {
                "x-rapidapi-key": "5ff22ea19db11151a018c36f7fd0213b",
                "x-rapidapi-host": "v3.football.api-sports.io",
            }
        })
.then((response)=> response.json()) 
.then((json)=>{
console.log(json.response)

    setAffiche(json.response[0])

})      
        
       }
       catch (error){
        console.error("error:", error)
       }};
       fetchS();}, []

       )

       console.log(affich)

return (
    <div><p>{affich.teams.home.name}</p></div>
)
}

export default Affiche