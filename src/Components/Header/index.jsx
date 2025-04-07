import './style.css'
import logo from '../../assets/logo.png'

function Header() {

    return (
        <>
            <header>
                <img src={logo} alt="" />

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Objetivos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header
