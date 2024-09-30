import { useState, useEffect } from "react";

function Details({id}){

    const [liv, setLive] = useState([])



    useEffect(()=> {
        const fetchData = ()=>{
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

    setLive(json.response)

})      
        
       }
       catch (error){
        console.error("error:", error)
       }};
       fetchData();}, [id]

       )
console.log(id)
console.log(liv)

return (
    <div>
        <img alt="" />
    </div>
)
}

export default Details