import { useState, useEffect } from "react"

function Journees({setFilter, round, id}){




const [currentRound, setCurrentRound] = useState("")

useEffect(()=> {
    const fetchRound = ()=>{
        try {
             fetch(`https://v3.football.api-sports.io/fixtures/rounds?season=2024&league=${id}&current=true`, {
        method: "GET",
         headers: {
            "x-rapidapi-key": "5ff22ea19db11151a018c36f7fd0213b",
            "x-rapidapi-host": "v3.football.api-sports.io",
        }
    })
.then((response)=> response.json()) 
.then((json)=>{
console.log(json)

setCurrentRound(json.response)

})      
    
   }
   catch (error){
    console.error("error:", error)
   }};
   fetchRound();}, [id]

   )

   let currentIndex = round.indexOf(currentRound.toString())

   const [index, setIndex] = useState(currentIndex)

   const i = currentIndex
   console.log(i)



console.log(currentIndex)

console.log(index)

const filtrageNext = () => {
    setIndex(index +1)
}

const filtragePrev = ()=> {
    setIndex(index -1)
}



           return (

    <div className="clearfix">
           <div className="pre-button" onClick={filtragePrev} ><i class="fa-solid fa-chevron-left"></i></div>
            <div className="head-info">
                <select onChange={setFilter(round[index])}><option>Journee {index +1}</option></select>
            </div>
            <div className="next-button" onClick={filtrageNext} ><i class="fa-solid fa-chevron-right"></i></div>
            </div>
            
            )
            
}

export default Journees