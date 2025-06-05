import "./Header.css";
import Logo from "../../assets/img/logo1.svg";
import { Link } from "react-router-dom"
import Porta from "../../assets/img/portaSaida.png"

const Header = (props) => {
    return (
        <header>
            <div className="layout_grid cabecalho">
                <Link to="/">
                    <img src={Logo} alt="Logo do Event Plus" />
                </Link>
                <nav className="nav_header">
                    <Link className="link_header" to="/Home">Home</Link>
                    <Link className="link_header" to="/TipoEvento">Eventos</Link>
                    <Link className="link_header" to="/TipoUsuario">Usuarios</Link>
                    <Link className="link_header" to="/Contatos">Contatos</Link>
                    <Link className="link_header" to="/Administrador">{props.adm}</Link>
                    <Link to="/">
                    <img src={Porta} alt="Imagem de porta"/>
                    </Link>
                </nav>


            </div>

        </header>
    )
}

export default Header;