import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from '../../components/lista/Lista';

import { Fragment } from "react";

const CadastroTipoEvento = () => {
  return (
    <>
      <Header />
      <main>
        <Cadastro 
          tituloCadastro="CADASTRO TIPO DE EVENTOS" 
          placeholder="tipo de evento" 
          visibilidade="none" 
        />
        <Lista 
          tituloLista="LISTA TIPO DE EVENTOS"
          visibilidade="none" 
        />
      </main>
      <Footer />
    </>
  );
};

export default CadastroTipoEvento;