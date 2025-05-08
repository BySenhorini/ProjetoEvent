import "./Cadastro.css";
import Botao from "../botao/Botao";
import Imagem from '../Imagem/Imagem';

const Cadastro = (props) => {
    return (
      <main className="layout_grid main_cadastro">
          <form action="" className="layout_grid form_cadastro">
            <div className="titulo">
                    <h1>{props.tituloCadastro}</h1>
                    <hr/>
                </div>

            <section className="layout_grid section_cadastro">
                    <div className="banner_cadastro">
                    <Imagem imagem={props.imagem} alt="Banner do cadastro" />
                    </div>

            
                    <div className="campos_cadastro">
                        <div className="campo_cad_titulo">
                            <label htmlFor="titulo"></label>
                            <input type="text" name="Nome" placeholder={`${props.namePlace}`}/>
                            <input type="text" name="nome" placeholder={`${props.namePlace}`}/>
                        </div>

                        <Botao nomeDoBotao="Cadastrar"/>
                    </div>
            </section>
                </form>
        </main>
    )
}

export default Cadastro;