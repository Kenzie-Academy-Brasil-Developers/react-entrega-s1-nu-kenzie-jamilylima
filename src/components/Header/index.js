import "./header.css"
import Logo from "./NuKenzie.png"

function Header({ setIniciar }) {

    function handleSair() {
        setIniciar(true)
    }

    return (
        <header>
            <img src={Logo} alt=""/> 
            <button onClick={handleSair} className="btnHeader">Inicio</button>
        </header>
    )
}

export default Header