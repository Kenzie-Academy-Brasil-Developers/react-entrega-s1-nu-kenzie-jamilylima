import "./soma.css"

function SomaValores({ listTransactions }) {
    

    const totalPreco = listTransactions.reduce((valorAnterior, valorAtual) => {
        return Number(valorAtual.valor) + Number(valorAnterior);
    }, 0)
  
    
    return (
        <div className="ValorConta">
            <span className="nomeValor">Valor total:</span>
            <span className="totalPreco">$ {totalPreco},00</span>
        </div>
    )


}

export default SomaValores

