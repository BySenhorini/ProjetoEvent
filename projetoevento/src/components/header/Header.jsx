import "./Header.css";
import Logo from "../../assets/img/logo1.svg";
import Adm from "../../assets/img/portaSaida.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="layout_grid cabecalho">
                {/* Ao clicar no link redireciona ao Login */}
                <Link to="/">
                    <img src={Logo} alt="logo da filmoteca" />
                </Link>
                <nav className="nav_header">
                    <Link className="link_header" to="/">Home</Link>
                    <Link className="link_header" to="/eventos">Eventos</Link>
                    <Link className="link_header" to="/usuarios">Usuários</Link>
                    <Link className="link_header" to="/contatos">Contatos</Link>
                    <Link className="link_header" to="/admin">Administrador</Link>
                </nav>
                    <img src={Adm} alt="Administrador"/>
            </div>
        </header>
    );
};

export default Header;