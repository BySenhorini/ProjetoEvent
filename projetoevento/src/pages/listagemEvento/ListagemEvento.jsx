import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import imagemListarEvento from "../../assets/img/cadastroDeEvento.png";


const ListagemEvento = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    nametitulo="Tipo Evento"
                    imagem={imagemListarEvento}
                    titulo_cadastro="Cadastro de Evento"
                    nome="Nome"
                    exibir_tipo_evento={true} />

                <Lista
                    nome_titulo="Tipo Evento"
                    titulo_item_lista="Nome"
                    titulo_item_lista2="Tipo Evento"
                    titulo_lista="Lista de Evento"
                    visibilidade="none"
                />
            </main>
            <Footer />
        </>
    )
}
export default ListagemEvento;