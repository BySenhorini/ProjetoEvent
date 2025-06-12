import { Fragment, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Listagem from "../../components/lista/Lista";
import banner from "../../assets/img/tipoevento.png";

import Swal from "sweetalert2";
import api from "../../Services/Services";

const   TipoEvento = () => {
  const [tipoEvento, setTipoEvento] = useState("");
  const [listaTipoEvento, setListaTipoEventos] = useState([]); // corrigido: inicializado como array

  function alertar(icone, mensagem) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: icone,
      title: mensagem,
    });
  }

  async function cadastrarTipoEvento(e) {
    e.preventDefault();
    if (tipoEvento.trim() !== "") {
      try {
        await api.post("tiposEventos", { tituloTipoEvento: tipoEvento }); // campo corrigido para lowercase 'tituloTipoEvento'
        alertar("success", "sucesso! Cadastro realizado");
        setTipoEvento("");
        listarTipoEvento(); // atualizar lista após cadastro
      } catch (error) {
        console.log(error);
      }
    } else {
      alertar("error", "Erro! preencha os campos");
    }
  }

  async function listarTipoEvento() {
    try {
      const resposta = await api.get("tiposEventos");
      setListaTipoEventos(resposta.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deletarTipoEvento(id) {
    const confirm = await Swal.fire({
      title: "Tem certeza?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar!",
    });

    if (!confirm.isConfirmed) return;

    try {
      await api.delete(`tiposEventos/${id.idTipoEvento}`);
      listarTipoEvento();
      Swal.fire({
        title: "Deletado!",
        text: "Deletado com sucesso.",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function editarTipoEvento(tipoEvento) {
    const { value: novoTipo } = await Swal.fire({
      title: "Modifique seu tipo evento",
      input: "text",
      inputLabel: "Novo tipo genero",
      inputValue: tipoEvento.tituloTipoEvento,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "O campo precisa estar preenchido!";
        }
      },
    });
    if (novoTipo) {
      try {
        await api.put(`tiposEventos/${tipoEvento.idTipoEvento}`, {
          tituloTipoEvento: novoTipo,
        }); // adicionar await para esperar requisição
        Swal.fire(`tipo evento modificado para: ${novoTipo}`);
        listarTipoEvento(); // atualizar lista após edição
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    listarTipoEvento();
  }, []); // corrigido para array vazio

  return (
    <Fragment>
      <Header adm="Administrador" />
      <main>
        <Cadastro
          titulo="Tipo De Evento"
          visivel="none"
          imagem={banner}
          placeholder="Titulo"
          funcCadastro={cadastrarTipoEvento}
          valorInput={tipoEvento}
          setValorInput={setTipoEvento}
          visibilidade="none"
        />
        <Listagem
          tituloLista="Lista Tipo De Eventos"
          visivel="none"
          lista={listaTipoEvento}
          funcExcluir={deletarTipoEvento}
          funcEditar={editarTipoEvento}
          tipoLista="tiposEventos"
          visivelD="none"
          tipo="Titulo"
          visivelTipo="none"
          visivelDt="none"
        />
      </main>
      <Footer />
    </Fragment>
  );
};

export default TipoEvento;