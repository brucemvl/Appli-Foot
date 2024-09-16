import { useState } from "react"

function Journees({setFilter, filter, round}){


const [index, setIndex] = useState(4)

const filtrageNext = () => {
    setIndex(index +1)
}

const filtragePrev = ()=> {
    setIndex( index - 1)
}




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