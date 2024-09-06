import { useState, useRef } from "react"

function Journees({setFilter, filter, round}){

  /*  
console.log(filter)
    return (

        <div>
                <ul>
                    {round.map((element)=>
                    <li key={"journee" + element} value={element} onClick={()=> setFilter(element)} >{element}</li>)}
                </ul>
            </div>
    )
            */

const myRef = useRef()
//const journey = document.querySelector(".head-month")
const [index, setIndex] = useState(0)

const filtrageNext = () => {
    //setFilter(journey.textContent)
    setIndex(index +1)
}

const filtragePrev = ()=> {
   //setFilter(journey.textContent)
    setIndex( index - 1)
}

console.log("index = " + index)
console.log("filter = " + filter)
console.log("round index = " + round[index])
console.log(myRef)
console.log(myRef.current)
//console.log(myRef.current.innerText)
//console.log(myRef.current.innerHTML)


           return (

    <div className="clearfix">
           <div class="pre-button" onClick={filtragePrev} ><i class="fa-solid fa-chevron-left"></i></div>
            <div class="head-info">
                <select onChange={setFilter(round[index])}><option>Journee {index + 1}</option></select>
            </div>
            <div class="next-button" onClick={filtrageNext} ><i class="fa-solid fa-chevron-right"></i></div>
            </div>
            )
}

export default Journees