// src/routes/Rotas.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroTipoUsuario from "../pages/cadastroTipoUsuario/CadastroTipoUsuario";
import CadastroTipoEvento from "../pages/cadastroTiposEventos/CadastroTiposEventos";
import ListagemEvento from "../pages/listagemEvento/ListagemEvento";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/CadastroTipoEvento" element={<CadastroTipoEvento />} />
                <Route path="/CadastroTipoUsuario" element={<CadastroTipoUsuario />} />
                <Route path="/ListagemEvento" element={<ListagemEvento />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
