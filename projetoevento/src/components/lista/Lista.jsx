import './Lista.css';
import Lixo from "../../assets/img/lixo.png"
import Caneta from "../../assets/img/lapis.png"

const Lista = (props) => {
  return (
    <section className="listagem">
      <h1>{props.titulo_lista}</h1>
      <hr />

      <div className="tabela">
        <thead>
          <tr className="tabela_cabecalho">
            <th>Título</th>
            <th>{props.nome_titulo}</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          <tr className="item_lista">
            <td data-cell="Título">{props.titulo_item_lista}</td>
            <td>{props.titulo_item_lista2}</td>
            <td data-cell="Editar"><img src={Caneta} alt="Imagem de uma caneta" /></td>
            <td data-cell="Excluir"><img src={Lixo} alt="ícone deletar" /></td>
          </tr>
        </tbody>
      </div>
    </section>
  );
};

export default Lista;