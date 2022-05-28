
import "./list.css";

function List() {
  return (
        <div className="Lancamento">
          <div className="filtrar">
            <h1 className="Resumo">Resumo financeiro</h1>

            <div className="btnFiltros">
              <button className="btn">Todos</button>
              <button className="btn">Entradas</button>
              <button className="btn">Despesas</button>
            </div>
          </div>
          <p className="contaVazia">Você ainda não possui nenhum lançamento</p>

          <div className="carregando">
            <span className="bbVazio"></span>
            <div className="list">
              <div className="carregamento"></div>
              <div className="carregamento2"></div>
            </div>
          </div>

          <div className="carregando">
            <span className="bbVazio"></span>
            <div className="list">
              <div className="carregamento"></div>
              <div className="carregamento2"></div>
            </div>
          </div>

          <div className="carregando">
            <span className="bbVazio"></span>
            <div className="list">
              <div className="carregamento"></div>
              <div className="carregamento2"></div>
            </div>
          </div>
        </div>
  );
}
export default List;






   