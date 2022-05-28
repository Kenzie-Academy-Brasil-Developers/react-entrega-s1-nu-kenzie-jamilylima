import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import SomaValores from "./components/SomaValores";
import TelaIniciar from "./components/TelaIniciar";
import ListRenderiza from "./components/ListRenderiza/ListRenderiza";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [listFilterTransactions, setListFilterTransactions] = useState([]);

  const [iniciar, setIniciar] = useState(true);

  const addTransicao = (Lista) => {
    setListTransactions([...listTransactions, Lista]);
  };

  const addTransicao2 = (Lista) => {
    setListFilterTransactions([...listFilterTransactions, Lista]);
  };

  const excluirTransicao = (RemoverItem) => {
    const filtro = listFilterTransactions.filter(
      (transicao) => transicao !== RemoverItem
    );
    setListFilterTransactions(filtro);
  };

  const filtrarTransacao = (tipoTransacao) => {
    setListFilterTransactions(
      listTransactions.filter((item) => item.tipoDespesa === tipoTransacao)
    );
  };

  const filtrarTodos = () => {
    setListFilterTransactions(listTransactions);

  };

  return iniciar ? (
    <TelaIniciar setIniciar={setIniciar} />
  ) : (
    <>
      <header>
        <Header setIniciar={setIniciar} />
      </header>

      <main>
        <div className="somaValores">
          <Form addTransicao={addTransicao} addTransicao2={addTransicao2} />
          <SomaValores listTransactions={listTransactions} />
        </div>

        <aside>
          {listFilterTransactions.length === 0 ? (
            <List />
          ) : (
            <ListRenderiza
              filtrarTransacao={filtrarTransacao}
              filtrarTodos={filtrarTodos}
              excluirTransicao={excluirTransicao}
              listFilterTransactions={listFilterTransactions}
            />
          )}
        </aside>
      </main>
    </>
  );
}

export default App;
