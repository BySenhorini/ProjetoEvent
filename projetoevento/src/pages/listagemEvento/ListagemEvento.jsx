import "./ListagemEvento.css"
import descricao from "../../assets/img/informacoes.svg";
import api from "../../Services/Services";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Modal from "../../components/modal/Modal"
import Comentario from "../../assets/img/balao2.svg";
import fecharModal from "../../components/modal/Modal";
import Swal from "sweetalert2";

const ListagemEvento = () => {

    const [listaEventos, setListaEventos] = useState([]);
    const [tipoModal, setTipoModal] = useState(""); //"descriçãoEvento" ou "Comentário"
    const [dadosModal, setDadosModal] = useState({});
    const [modalAberto, setModalAberto] = useState(false);
    const [usuarioId, setUsuarioId] = useState("3FA85F64-5717-4562-B3FC-2C963F66AFA6")
    const [filtroData, setFiltroData] = useState(["todos"]);

    async function listarEvento() {
        try {
            const resposta = await api.get("Eventos")
            const todosOsEventos = resposta.data;


            const respostaPresenca = await api.get("PresencasEventos/ListarMinhas/" + usuarioId)
            const minhasPresencas = respostaPresenca.data;

            const eventosComPresenca = todosOsEventos.map((atualEvento) => {
                const presenca = minhasPresencas.find(p => p.idEvento === atualEvento.idEvento)
                return {//as informacoes tanto de eventos quanto de eventos
                    ...atualEvento, //mantem os dados originais do evento atual
                    possuiPresenca: presenca?.situacao === true,
                    idPresenca: presenca?.idPresencaEvento || null
                }


            })
            setListaEventos(eventosComPresenca);
            console.log(resposta.data);

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        listarEvento();
    }, [])

    function abrirModal(tipo, dados) {
        setTipoModal("");
        setDadosModal({});
        setModalAberto(true);
    }
    function fecharModal() {
        setTipoModal("");
        setDadosModal({});
        setModalAberto(true);


    }
    async function manipularPresenca(idEvento, presenca, idPresenca) {
        try {
            if (presenca && idPresenca != "") {
                await api.put(`PresencasEventos/${idPresenca}`, { situacao: false })
                //atualizacao: situacao para FALSE
                Swal.fire(`Removido!`, `Sua presenca foi removida`, `success`);

            } else if (idPresenca != "") {
                await api.put(`PresencasEventos/${idPresenca}`, { situacao: true });
                Swal.fire(`Confirmado!`, `Sua presenca foi confirmada`, `success`);
                //atualizacao: situacao para TRUE

            } else {
                await api.post("PresencasEventos", { situacao: true, idUsuario: usuarioId, idEvento: idEvento });
                Swal.fire(`Confirmado!`, `Sua presenca foi confirmada`, `success`);
                //cadastrar uma nova presenca

            }
            listarEvento()
        } catch (error) {
            console.log(error);

        }
    }
    function filtrarEventos() {
        const hoje = new Date();

        return listaEventos.filter(evento => {
            const dataEvento = new Date(evento.dataEvento);
            if (filtroData.includes("todos")) return true;
            if (filtroData.includes("passados")  && dataEvento > hoje) return true;
            if(filtroData.includes("futuros")  && dataEvento < hoje) return true;

            return false;
        });
    }

    return (
        <>
            <main className="main_lista_eventos layout-grid">
                <div className="titulo">
                    <h1>Eventos</h1>
                    <hr />
                </div>

                <select onChange={(e) => setFiltroData([e.target.value])}>
                    <option value="todos" selected>Todos os eventos</option>
                    <option value="futuros" selected>Somente passados</option>
                    <option value="passados">Somente futuros</option>
                </select>

                <table className="tabela_lista_eventos">
                    <thead>
                        <tr className="th_lista_eventos">
                            <th>Titulo</th>
                            <th>Data Evento</th>
                            <th>Comentarios</th>
                            <th>Participar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaEventos.length > 0 ? (
                            filtrarEventos() && filtrarEventos().map((item) => (
                                <tr>
                                    <td>{item.nomeEvento}</td>
                                    <td>{format(item.dataEvento, "dd/MM//yy")}</td>
                                    <td>{item.TiposEventos.tituloTipoEvento}</td>

                                    <td
                                        data-cell="Descrição">

                                        <img src={descricao}
                                            alt="Balão de descrição"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => abrirModal("descricaoEvento", { descricao: item.descricao })}
                                        />
                                    </td>
                                    <td
                                        data-cell="Comentario">

                                        <img src={Comentario}
                                            alt="Balão de comentário"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => abrirModal("cometarios", { idEvento: item.idEvento })}
                                        />
                                    </td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox"
                                                checked={item.possuiPresenca}
                                                onChange={() => manipularPresenca(item.idEvento, item.possuiPresenca, item.idPresenca)} />
                                            <span className="slider"></span>
                                        </label>
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <p>Não tem nenhum evento cadastrado</p>
                        )
                        }

                    </tbody>
                </table>
            </main>
            {modalAberto && (
                <Modal
                    titulo={tipoModal == "descricaoEvento" ? "Descrição do evento" : "Comentário"}
                    tipoModal={tipoModal}

                    idEvento={dadosModal.idEvento}
                    descricao={dadosModal.descricao}
                    fecharModal={fecharModal}

                />

            )}
        </>

    )
}

export default ListagemEvento;