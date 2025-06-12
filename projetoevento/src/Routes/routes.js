// src/routes/Rotas.jsx
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroEvento from "../pages/cadastroEvento/CadastroEvento";
import ListagemEvento from "../pages/listagemEvento/ListagemEvento";
import TipoUsuarios from "../pages/tipoUsuarios/TipoUsuarios";
import TipoEventos from "../pages/tipoEventos/TipoEventos";
import { useAuth } from "../contexts/AuthContexts";
import Cadastro from "../components/cadastro/Cadastro";


const Privado = (props) => {
    const {usuario} = useAuth();
    //token, idUsuario, tipoUsuario
    //Se nao estiver autentificado, manda para login
    if (!usuario) {
        return <Navigate to="/" />;
    }
    //Se o tipo do usuario nao for o permitido, bloqueia
    if (usuario.TipoUsuarios !== props.tipoPermitido) {
        //ir para a tela de nao encontrado!
        return <Navigate to="/" />;
    }
}

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/ListagemEvento" element={<ListagemEvento />} />
                <Route path="/CadastroEvento" element={<CadastroEvento />} />
                <Route path="/TipoEvento" element={<TipoEventos />} />
                <Route path="/TipoUsuario" element={<TipoUsuarios />} />
                <Route path="/Login" element={<Login />} />
                 <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
