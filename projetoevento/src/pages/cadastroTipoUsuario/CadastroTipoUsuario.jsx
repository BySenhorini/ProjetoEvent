import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import imagemTipoUsuario from "../../assets/img/tipoUsuario.png";

const CadastroTipoGenero = () => {
  return (
    <>
      <Header />
      <main>
        <Cadastro
          imagem={imagemTipoUsuario} 
          tituloCadastro="Cadastro Tipo de Usuário"
          namePlace="Título"
        />

        <Lista
          tituloItemLista="Tipo Usuário"
          tituloLista="Lista De Tipo Usuário"
        />
      </main>
      <Footer />
    </>
  );
};

export default CadastroTipoGenero;