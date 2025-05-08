import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from '../../components/lista/Lista'; 
import imagemTipoEvento from "../../assets/img/undraw_add_tasks_re_s5yj (1) 1 (1).png"

const CadastroTipoEvento = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    imagem={imagemTipoEvento}
                    tituloCadastro="Cadastro Tipo de Usuario"
                    namePlace="Titulo"
                />

                <Lista
                    tituloItemLista="Tipo Evento"
                    tituloLista="Lista De Eventos"
                />

            </main>
            <Footer />
        </>
    )
}

export default CadastroTipoEvento;