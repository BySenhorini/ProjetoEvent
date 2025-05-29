import "./Cadastro.css";
import Botao from "../botao/Botao";
import Imagem from "../Imagem/Imagem";
import { useState } from "react";



const Cadastro = (props) => {
    const [formData, setFormData] = useState({
        nome: '',
        tipoEvento: '',
        instituicao: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados cadastrados:", formData);

    };

    return (
        <section className="layout_grid main_cadastro">
            <form className="layout_grid form_cadastro" onSubmit={handleSubmit}>
                <div className="titulo">
                    <h1>{props.titulo_cadastro}</h1>
                    <hr />
                </div>

                <div className="layout_grid section_cadastro">
                    <div className="banner_cadastro">
                        <Imagem imagem={props.imagem} alt="Banner do cadastro" />
                    </div>

                    <div className="campos_cadastro">
                        <div className="campo_cad_titulo">
                            <label htmlFor="nome">Nome:</label>
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                placeholder={props.nome || "Titulo"}
                                value={formData.nome}
                                onChange={handleChange}
                            />
                         </div>
                         {/* <div className="campo_cad_nome">
                            <input style={{ display: props.visibilidade }}
                                type="date"
                                value={props.valorInputData}
                                onChange={(e) => props.setValorInputData(e.target.value)} />
                        </div>
                        <div className="campo_cad_genero" style={{ display: props.visibilidadeTipoEvento }}>
                            <select name="tipoEvento"
                                value={props.valorSelectTipoEvento}
                                onChange={(e) => props.setValorSelectTipoEvento(e.target.value)}>
                                <option disabled selected>Tipo Evento</option>
                                {props.lista &&
                                    props.lista.map((itemTipoEvento, index) => (
                                        <option key={index} value={itemTipoEvento.titulo_cadastro}>
                                            {itemTipoEvento.titulo_cadastro}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        <div className="campo_cad_genero" style={{ display: props.visibilidadeInstituicao }}>
                            <select name="instituicao"
                                value={props.valorSelectInstituicao}
                                onChange={(e) => props.setValorSelectInstituicao(e.target.value)}>
                                <option disabled selected>Instituições</option>
                                {props.listaInstituicoes && props.listaInstituicoes.map((instituicao, index) =>
                                (<option key={index} value={instituicao.nome}>
                                    {instituicao.nome}
                                </option>))}
                            </select>
                        </div> */} 
                        {/* <div className="campo_cad_nome">
                            <input type="text"
                                placeholder={props.campo_descricao}
                                value={props.valorInputDescricao}
                                style={{ display: props.visibilidadeDescricao }}
                                onChange={(e) => props.setValorText(e.target.value)} />
                        </div>   */}

                        {props.exibir_tipo_evento && (
                            <div className="campo_tipo_evento">
                                <label htmlFor="tipoEvento">:</label>
                                <select
                                    name="tipoEvento"
                                    id="tipoEvento"
                                    value={formData.tipoEvento}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Tipo evento</option>
                                    <option value="op1">Aniversário.</option>
                                    <option value="op2">Desfile de moda.</option>
                                    <option value="op3">Corrida de carros esportivos.</option>
                                </select>

                                <label htmlFor="instituicao">Data do evento:</label>
                                <select
                                    name="instituicao"
                                    id="instituicao"
                                    value={formData.instituicao}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Data do evento</option>
                                    <option value="dia 1"> 28/05/2025</option>
                                </select>

                                <label htmlFor="instituicao">Instituição:</label>
                                <select
                                    name="instituicao"
                                    id="instituicao"
                                    value={formData.instituicao}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Instituição</option> 
                        <option value="inst1">SENAI São Caetano do Sul - Informática - Escola Senai "Paulo Antonio Skaf"</option>


                         </select>

                        <hr />
                        </div> 
                        )} 

                        <Botao nomeDoBotao="Cadastrar" />
                    </div>
                </div>
            </form>
        </section>
        );
};

export default Cadastro;
