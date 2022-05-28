import "./Iniciar.css"
import Logon from "./NuKenzie.png"
import verde from "./verde.png"
import vermelho from "./vermelho.png"

function TelaIniciar({ setIniciar }) {

    function handleInicio() {
        setIniciar(false)
    }
    
    return (

        <section className="inicio">

            <section className="telainicial">
                <img className="imgLogon" src={Logon} alt="" /> 
                <h1 className="Txt">Centralize o
                    controle das suas finanças</h1>
                <p className="paragrafo">de forma rápida e segura</p>
                <button className="btnIniciar" onClick={handleInicio}>Iniciar</button>
            </section>
            <aside className="Logo">


                <div className="primeiroCirculo"></div>
                <div className="segundoCirculo"> </div>
                <div className="terceiroCirculo"></div>

                <div className="primeiroRetangulo"></div>

                <div className="retanguloInterno"></div>
                <div className="retanguloInternoo"></div>
                <div className="retanguloInternooo"></div>
                <div className="retanguloInternoooo"></div>
                <div className="retanguloInternooooo"></div>

                <div className="bolaPreta"></div>
                <div className="bolaVerde"></div>
                <div className="bolaVermelha"></div>

                <div className="retanguloUm"></div>
                <div className="carregamentoUm"></div>
                <div className="carregamentoDois"></div>

                <div className="quadradoVerde"></div>
                <img  className="imgverde" src={verde} alt=""/>
               
                
                <div className="retanguloDois"></div>
                <div className="carregamentoMaior"></div>
                <div className="carregamentoMenor"></div>

                <div className="quadradoRosa"></div>
                <img  className="imgVermelho" src={vermelho} alt=""/>

              
            </aside>

         
        </section>

    )
}

export default TelaIniciar