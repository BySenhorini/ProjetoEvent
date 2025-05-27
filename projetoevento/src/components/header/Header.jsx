
import "./Header.css";
import Logo from "../../assets/img/logo1.svg";
import Imagem from "../../assets/img/Vector (13).png";

const Header = () => {
    return (
        <header>
            <link rel="stylesheet" href="https://use.typekit.net/pam4ubo.css" />

            <div className="layout_grid header_header">
                <img className="login_img" src={Logo} alt="" />
                <nav className="nav_header">
                    <a href="#" className="link_header">Home</a>
                    <a href="#" className="link_header">Eventos</a>
                    <a href="#" className="link_header">Usuários</a>
                    <a href="#" className="link_header">Contatos</a>
                </nav>
                <nav className="navs_header">
                    <div className="adm_info">
                        <a href="#" className="link_header">Administrador</a>
                        <img src={Imagem} alt="Foto do administrador" />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;