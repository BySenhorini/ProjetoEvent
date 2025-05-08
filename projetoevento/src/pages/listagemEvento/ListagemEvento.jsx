import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Imagem from "../../assets/img/cadastroDeEvento.png";


const ListagemEvento = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    imagem={Imagem}
                    tituloCadastro="Cadastro de Evento"
                    namePlace="Nome"
                />
                <Lista
                    tituloItemLista="Nome"
                    tituloLista="Lista de Evento"
                />
            </main>
            <Footer />
        </>
    )
}
export default ListagemEvento;