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


//const journey = document.querySelector(".head-month")
const [index, setIndex] = useState(0)

//const plus = ()=> setindex(index + 1)
//const moins = ()=> setIndex(index - 1)

const filtrageNext = () => {
    setFilter(round[index])
    setIndex(index +1)
}

const filtragePrev = ()=> {
    setFilter(round[index])
    setIndex( index - 1)
}

console.log(index)
           return (

    <div className="clearfix">
           <div class="pre-button" onClick={filtragePrev} > prev </div>
            <div class="head-info">
                <div class="head-month" >{round[index]}</div>
            </div>
            <div class="next-button" onClick={filtrageNext} > next </div>
            </div>
            )
}

export default Journees