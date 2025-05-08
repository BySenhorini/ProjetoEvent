import './Cadastro.css'; // ✅ correto
import Imagem from "../../assets/img/cadastroDeEvento.png";
import Botao from "../botao/Botao";

const Cadastro = (props) => {
  return (
    <section className="section_cadastro">
      <form className="layout_grid form_cadastro">
        <h2>{props.tituloCadastro}</h2>

        <div className="cadastro-conteudo">
          <img
            src={Imagem}
            alt="imagem do cadastro tipo evento"
            className="logo_tipoEvento"
          />

          <div className="campos_cadastros">
            <div className="campo-cad_nome">
              <label htmlFor="nome" className="titulo">Título</label>
              <hr className="linha-entre-campos" />
              <input type="text" name="nome" />
            </div>

            <Botao nomeDoBotao="Cadastrar" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Cadastro;