import { useState, useEffect } from "react"

function Journees({setFilter, round, currentIndex, newround}){

console.log(currentIndex)
   const [index, setIndex] = useState();

   useEffect(()=>{
    setIndex(currentIndex)
   }, [currentIndex])



   console.log(currentIndex)
   console.log(index)

    const filtrageNext = () => {
        setIndex(prevIndex => Math.min(index + 1, round.length - 1)); // Limiter pour éviter de dépasser
    };

    const filtragePrev = () => {
        setIndex(prevIndex => Math.max(index - 1, 0)); // Limiter pour éviter d'aller en dessous de 0
    };



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