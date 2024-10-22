import "../styles/Header.scss"
import logo from "../assets/logoblanc.png"
//import { Link } from 'react-router-dom'
import Menu from "./Menu.jsx"


function Header() {
    return (
    <header>
        <img src={logo} alt="logo"/>
        <Menu />
    </header>
    )
}

export default Header