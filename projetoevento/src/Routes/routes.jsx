import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroTipoEvento from "../pages/cadastroTiposEventos/CadastroTiposEventos";
import CadastroTipoUsuario from "../pages/cadastroTipoUsuario/CadastroTipoUsuario"
import ListagemEvento from "../pages/listagemEvento/ListagemEvento"

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* http://localhost:3000/   => Login */}
                <Route path="/" element = {<Login/>} exact/>

                {/* http://localhost:3000/CadastroTipoEvento  => Cadastro de evento */}
                <Route path="/CadastroTipoEvento" element = {<CadastroTipoEvento/>}/> 

                {/* http://localhost:3000/CadastroTipoUsuario => Cadastro de evento */}
                <Route path="/CadastroTipoUsuario" element = {<CadastroTipoUsuario/>}/> 

                {/* http://localhost:3000/ListagemEvento => Listagem de Evento */}
                <Route path="/ListagemEvento" element ={<ListagemEvento/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;