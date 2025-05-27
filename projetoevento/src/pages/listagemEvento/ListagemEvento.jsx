import { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import imagemListarEvento from "../../assets/img/cadastroDeEvento.png";

const ListagemEvento = () => {
    const [eventos, setEventos] = useState([]);

    const cadastrarEvento = (evento) => {
        setEventos([...eventos, evento]);
    };

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    nametitulo="Tipo Evento"
                    imagem={imagemListarEvento}
                    titulo_cadastro="Cadastro de Evento"
                    nome="Nome"
                    exibir_tipo_evento={true}
                    onCadastrar={cadastrarEvento}
                />

                <Lista
                    nome_titulo="Lista de Eventos"
                    titulo_item_lista="Nome"
                    titulo_item_lista2="Tipo Evento"
                    titulo_lista="Lista de Evento"
                    visibilidade="none"
                    itens={eventos}
                />
            </main>
            <Footer />
        </>
    );
};

export default ListagemEvento;

