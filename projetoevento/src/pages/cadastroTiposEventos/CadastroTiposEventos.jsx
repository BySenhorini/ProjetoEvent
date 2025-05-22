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
                    titulo_cadastro="Cadastro Tipo de Evento"
                    nome="Titulo"
                />

                <Lista
                    titulo_item_lista="Tipo Evento"
                    titulo_lista="Lista De Eventos"
                     titulo_item_lista2=" "
                     visibilidade="none"
                />

            </main>
            <Footer />
        </>
    )
}

export default CadastroTipoEvento;