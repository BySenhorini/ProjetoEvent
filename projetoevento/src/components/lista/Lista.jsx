import './Lista.css';
import Lixo from "../../assets/img/lixo.png"
import Lapis from "../../assets/img/lapis.png"

const Lista = (props) => {
  return (
    <section className="layout_grid listagem">
      <h1>{props.tituloLista}</h1>
      <hr />

      <div className="tabela">
        <thead>
          <tr className="tabela_cabecalho">
            <th>Título</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          <tr className="item_lista">
            <td data-cell="Título">{props.tituloItemLista}</td>
            <td data-cell="Editar"><img src={Lapis} alt="Imagem de uma caneta" /></td>
            <td data-cell="Excluir"><img src={Lixo} alt="ícone deletar" /></td>
          </tr>
        </tbody>
      </div>
    </section>
  );
};

export default Lista;