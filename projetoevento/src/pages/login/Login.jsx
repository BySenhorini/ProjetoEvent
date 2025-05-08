import Logo from "../../assets/img/logo1.svg";
import Botao from "../../components/botao/Botao";
import "./Login.css";

const Login = () => {
  return (
    <main className="login-container">
      <div className="banner_event"></div>

      <section className="section-login">
        <img src={Logo} alt="Logo do Event+" className="logo-event" />

        <form className="form-login">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input className="user" type="email" id="username" name="username"/>
          </div>

          <div className="form-group">
            <label htmlFor="senha">Password</label>
            <input className="senhaInput" type="password" id="senha" name="senha"/>
          </div>

          <div className="forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </div>

          <Botao nomeDoBotao="Login"/>
        </form>
      </section>
    </main>
  );
};

export default Login;