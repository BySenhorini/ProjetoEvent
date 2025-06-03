import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Comentario from "../../assets/img/balao.png"
import Informacoes from "../../assets/img/informacoes.svg"
import "./ListagemEvento.css"
import Toggle from "../../components/toggle/Toggle";
import { useEffect, useState } from "react";
import api from '../../Services/Services';
import Swal from 'sweetalert2';
import Lista from "../../components/lista/Lista";
import { format } from "date-fns";
import { Modal } from "../../components/modal/Modal";


const ListagemEvento = () => {
    const [listaEvento, setListaEvento] = useState([]);

    async function listarEvento() {
        try {
            const resposta = await api.get("Eventos");
            setListaEvento(resposta.data);
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        listarEvento();
    })
    return (
        <>
        <main className="main_lista_evento_layout-grid">
            <div className="titulo">
                <h1>Eventos</h1>
                <hr />
            </div>
            <select name="" id="">
                <option value="" selected>Todos os eventos</option>
            </select>
            <table className="tabela_lista_eventos">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Data do evento</th>
                        <th>Tipo Evento</th>
                        <th>Descrição</th>
                        <th>Comentários</th>
                        <th>Participar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaEvento.length > 0 ? (
                        listaEvento.map((item) => (

                            <tr>
                                <td>{item.nomeEvento}</td>
                                <td>{format(item.dataEvento, "dd/MM/yy")}</td>
                                <td>{item.tiposEvento.tituloTipoEvento}</td>
                                <td>
                                    <button className="icon">
                                        <img src={Informacoes} alt="" />
                                    </button>
                                </td>
                                <td className="icon">
                                    <img src={Comentario} alt="" />
                                </td>
                                <td>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </td>

                            </tr>
                        ) )
                    ): (
                        <p>Nenhum item encontrado.</p>
                    )}



                </tbody>
            </table>

        </main>
        <Modal/>
        </>
    )
}


export default ListagemEvento;