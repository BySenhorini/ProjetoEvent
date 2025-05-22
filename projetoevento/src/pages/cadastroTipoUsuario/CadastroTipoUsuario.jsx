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
          titulo_cadastro="Cadastro Tipo de Usuário"
          nome="Título"
        />

        <Lista
          titulo_item_lista="Tipo Usuário"
          titulo_lista="Lista De Tipo Usuário"
           visibilidade="none"
        />
      </main>
      <Footer />
    </>
  );
};

export default CadastroTipoGenero;