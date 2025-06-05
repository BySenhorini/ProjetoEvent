import "./Login.css";
import login from "../../assets/img/login.png";
import Botao from "../../components/botao/Botao";
import Logo from "../../assets/img/logo1.svg";

const Login = () => {
    return (
        <main className="main_login">
            <div className="banner">

                <img src={login} alt="imagem login" />
            </div>
            <section className="section_login">
                <img src={Logo} alt="Logo Event" />
                <form action="" className="form_login">
                    <div className="campo_login">
                        <div className="campo_input">
                            <label htmlFor="UserName"></label>
                            <input type="UserName" name="Username" placeholder="Username" />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="password"></label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="link_senha">
                        <a href="">Esqueceu a senha?</a>
                    </div>
                    <Botao nomeDoBotao="Login" />
                </form>
            </section>
        </main>
    )
}

export default Login;