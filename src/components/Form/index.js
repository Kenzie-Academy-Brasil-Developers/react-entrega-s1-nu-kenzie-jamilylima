import { useState } from "react";
import "./form.css";

function Form({ addTransicao, addTransicao2 }) {
  const [inputValue, setInputValue] = useState("");
  const [valor, setValor] = useState(0);
  const [tipoDespesa, setTipoDespesa] = useState("Entrada");

  function handleForm(event) {
    event.preventDefault();
    const novaLista = {
      inputValue,
      valor,
      tipoDespesa,
    };

    addTransicao(novaLista);
    addTransicao2(novaLista);
  }

  return (
    <form className="formulario" onSubmit={handleForm}>
      <label className="labelDescricao">Descrição</label>
      <input
        className="inputDescricao"
        type="text"
        placeholder="Digite aqui sua descrição"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      ></input>

      <section className="alteraConta">
        <div>
          <label> Valor</label>
          <input
            className="valores"
            value={valor}
            type="number"
            placeholder="R$"
            onChange={(event) => setValor(event.target.value)}
          ></input>
        </div>

        <div>
          <label>Tipo de valor</label>

          <select
            className="valores"
            onChange={(event) => setTipoDespesa(event.target.value)}
            type="Number"
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesas">Despesas</option>
          </select>
        </div>
      </section>
      <button
        className="inserirValor"
        onSubmit={() => addTransicao(handleForm)}
      >
        Inserir valor
      </button>
    </form>
  );
}

export default Form;
