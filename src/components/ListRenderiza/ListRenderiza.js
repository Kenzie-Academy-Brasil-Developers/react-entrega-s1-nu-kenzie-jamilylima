import Excluir from "./trash.png";

function ListRenderiza({
  listFilterTransactions,
  filtrarTodos,
  filtrarTransacao,
  excluirTransicao,
}) {
  return (
    <div className="Lancamento">
      <div className="filtrar">
        <h1 className="Resumo">Resumo financeiro</h1>

        <div className="btnFiltros">
          <button onClick={() => filtrarTodos()} className="btn">
            Todos
          </button>
          <button onClick={() => filtrarTransacao("Entrada")} className="btn">
            Entradas
          </button>
          <button onClick={() => filtrarTransacao("Despesas")} className="btn">
            Despesas
          </button>
        </div>
      </div>
      <ul>
        {listFilterTransactions.map((item, index) => {
          return (
            <li className="listComDinheiro" key={index}>
              {item.tipoDespesa === "Entrada" ? (
                <span className="listagemConta"></span>
              ) : (
                <span className="listagemContaCinza"></span>
              )}

              <div className="descricaoEtipo">
                <p className="descricaoConta">{item.inputValue}</p>
                <span className="tipoDespesas">{item.tipoDespesa}</span>
              </div>

              <div className="valorEbtnExclui">
                <span className="itemValor">R$ {item.valor},00</span>
                <img
                  className="excluir"
                  onClick={() => excluirTransicao(item)}
                  src={Excluir}
                  alt=""
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListRenderiza;
