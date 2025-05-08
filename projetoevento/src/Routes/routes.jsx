import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroTipoEvento from "../pages/tiposEventos/TiposEventos";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* http://localhost:3000/   => Login */}
                <Route path="/" element = {<Login/>} exact/>

                {/* http://localhost:3000/CadastroTipoEvento  => Cadastro de evento */}
                <Route path="/CadastroTipoEvento" element = {<CadastroTipoEvento/>}/> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;