import "./Login.css";
import login from "../../assets/img/login.png";
import Botao from "../../components/botao/Botao";
import Logo from "../../assets/img/logo1.svg";
import api from "../../Services/Services";
import { Fragment, useEffect, useState } from "react";

import { userDecodeToken } from "../../auth/Auth";
import secureLocalStorage from "react-secure-storage";

import { Navigate, useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    async function realizarAutenticacao(e) {
        e.preventDefault();
        const usuario = {
            email: senha,
            senha: senha
        }
        if (senha.trim() != "" || email.trim() != "") {
            try {
                const resposta = await api.post("Login", usuario);

                const token = resposta.data.token;
                if (token) {
                    const tokenDecodificado = userDecodeToken(token);
                    secureLocalStorage.setItem("tokenLogin", JSON.stringify(tokenDecodificado));

                    if (tokenDecodificado.tipoUsuario === "aluno") {
                        //redirecionar a tela de aluno (listagem evento)
                        navigate("/ListagemEvento")

                    } else {
                        //ele vai me encaminhar para a tela de cadastro de eventos
                        navigate("/CadastroEvento")
                    }
                }

            } catch (error) {
                console.log(error);
                alert("Email ou senha inválidos! Caso tenha mais dúvidas, entre em contato com o suporte.")
            }
        } else {
            // alert("Senha fora do padrão esperado.")
            alert("Preencha os campos vazios para realizar o login!")
        }
    }
    return (
        <main className="main_login">
            <div className="banner">

                <img src={login} alt="imagem login" />
            </div>
            <section className="section_login">
                <img src={Logo} alt="Logo Event" />
                <form action="" className="form_login" onSubmit={realizarAutenticacao}>
                    <div className="campo_login">
                        <div className="campo_input">
                            <label htmlFor="Email"></label>
                            <input type="Username" name="Email" placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="senha"></label>
                            <input type="PassWord" name="senha" placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)} />
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