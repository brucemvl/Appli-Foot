import React from "react"
import banner from "../assets/banner.jpg"
import Filtres from "../components/Filtres"
import "../styles/Home.scss"
import Live from "../components/Live"

function Home(){

    return (


        <div className="blocpage">
             <div className="banner"><img src={banner} alt="players" /><div className="banner__text"> <h1>100% FOOT</h1><h2>Toutes vos infos Football en un clic</h2></div></div>
             <Live />
             <Filtres />


       </div>
    )

}

export default Home