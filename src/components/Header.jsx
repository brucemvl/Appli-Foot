import "../styles/Header.scss"
import logo from "../assets/logoblanc.png"
//import { Link } from 'react-router-dom'


function Header() {
    return (
    <header>
        <img src={logo} alt="logo"/>
    </header>
    )
}

export default Header