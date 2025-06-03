import React from 'react';

const Modal = (props) => {
    const comentarios = props.comentarios || [];

    return (
        <>
            <div className='modal-overlay' onClick={props.fecharModal}></div>
            <div className='modal'>
                <h1>{props.titulo}</h1>
                <div className='modal_conteudo'>
                    {props.tipoModal === 'descricaoEvento' ? (
                        <p>{props.descricao}</p>
                    ) : (
                        <>
                            {comentarios.map((item) => (
                                <div key={item.idComentarioEvento}>
                                    <strong>{item.usuario.nomeUsuario}</strong>
                                    <img src={ImDeletar} alt="Deletar" />
                                    <p>{item.descricao}</p>
                                    <hr />
                                </div>
                            ))}
                            <div>
                                <input type="text" placeholder='Escreva seu comentário' />
                                <button>Cadastrar</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Modal;
