import "./Cadastro.css";
import Botao from "../botao/Botao";
import Imagem from "../Imagem/Imagem"

const Cadastro = (props) => {
    return (
        <main className="layout_grid main_cadastro">
            <form action="" className="layout_grid form_cadastro">
                <div className="titulo">
                    <h1>{props.titulo_cadastro}</h1>
                    <hr />
                </div>

                <section className="layout_grid section_cadastro">
                    <div className="banner_cadastro">
                        <Imagem imagem={props.imagem} alt="Banner do cadastro" />
                    </div>

                    <div className="campos_cadastro">
                        <div className="campo_cad_titulo">
                            <label htmlFor="titulo"></label>
                            <input type="text" name="nome" placeholder={`${props.nome}`} />
                        </div>

                        {props.exibir_tipo_evento && (
                            <div className="campo_tipo_evento">
                                <label htmlFor="tipo_evento"></label>
                                <select name="tipo_evento" id="tipo_evento" defaultValue="">
                                    <option value="" disabled>Tipo evento</option>
                                    <option value="op1">op 1</option>
                                    <option value="op2">op 2</option>
                                    <option value="op3">op 3</option>
                                </select>
                                <hr />
                            </div>
                        )}
                        <Botao nomeDoBotao="Cadastrar" />
                    </div>
                </section>
            </form>
        </main>
    )
}

export default Cadastro