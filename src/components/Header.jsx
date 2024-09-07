import "../styles/Header.scss"
import logo from "../assets/logoblanc.png"
//import { Link } from 'react-router-dom'


function Header() {
    return (
    <div className="header">
        <img src={logo} alt="logo"/>
    </div>
    )
}

export default Header