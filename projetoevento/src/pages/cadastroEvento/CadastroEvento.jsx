import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import api from "../../Services/services"
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import Lista from "../../components/lista/Lista";
import Imagem from "../../assets/img/undraw_add_tasks_re_s5yj (1) 1 (1).png"

const CadastroTipoEvento = () => {

    const [TipoEvento, setTipoEvento] = useState("");
    const [listaTE, setListaTE] = useState([])

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
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }


    async function cadastrarTE(evt) {
        evt.preventDefault();
        
        if (TipoEvento.trim() !== "") {

            try {
               
                await api.post("TipoEvento", { tituloTipoEvento: TipoEvento });
                alertar("success", "Cadastro realizado com sucesso! 🎉")
                setTipoEvento()
                listarTE();
            } catch (error) {
                alertar("error", "ERRO: Entre em contato com o suporte! 🤖")
                console.log(error);
            }
        } else {


        }

        //try => tentar (O esperado)
        //catch => lança a exceção
    }

    async function listarTE() {
        try {
       
            const resposta = await api.get("TipoEvento");
            setListaTE(resposta.data)
            // console.log(resposta.data)

        } catch (error) {
            console.log(error);
        }
    }

    async function deletarTipoEvento(tipoEventoId) {

      
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: true
        });
        swalWithBootstrapButtons.fire({
            title: "Você tem certeza?",
            text: "Não será possivel reverter!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
          
                    await api.delete(`TipoEvento/${tipoEventoId.idTipoEvento}`);
                    alertar("success", "Tipo de evento deletado com sucesso! 💣")
                    swalWithBootstrapButtons.fire({
                        title: "Deletado!",
                        text: "O tipo de evento foi deletado.",
                        icon: "success"
                    });
                    setTipoEvento()
                    listarTE();

                } catch (error) {
                    alertar("error", "ERRO: Entre em contato com o suporte! 🤖")
                    console.log(error);
                }
            } else if (
               
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelado",
                    text: "O tipo usuario não foi deletado",
                    icon: "error"
                });
            }
        });
    }

    async function editarTE(idTipoEvento) {
        const { value: novoTipoEvento } = await Swal.fire({
            title: "Modifique seu tipo de evento",
            input: "text",
            inputLabel: "Novo tipo de evento",
            inputValue: idTipoEvento.tituloTipoEvento,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "O campo não pode estar vazio!";
                }
            }

        });
        if (novoTipoEvento) {
            try {
                await api.put(`TiposUsuarios/${idTipoEvento.tipoEventoID}`,
                    { tituloTipoEvento: novoTipoEvento })
                Swal.fire(`O tipo de usuario modificado é: ${novoTipoEvento}`);

                setTipoEvento()
                listarTE();

            } catch (error) {
                console.log(error);

            }
        }
    }

    useEffect(() => {
        listarTE();
    }, [])

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    funcCadastro={cadastrarTE}
                    setValorInput={setTipoEvento}
                    inputValor={TipoEvento}

                    titulo_cadastro="Cadastro de Evento"
                    nomes="Título"
                    visibilidade="none"
                    imagem={Imagem}

                    textoBotao="Cadastrar"

                />
                <Lista
                    titulo_lista="Lista de Eventos "
                    lista={listaTE}
                    visiAlternativa="none"
                    visiComentario="none"
                    tipoLista="TipoEvento"
                    funcExcluir={deletarTipoEvento}
                    funcEditar={editarTE}


                />
            </main>
            <Footer />
        </>

    )
}

export default CadastroTipoEvento;