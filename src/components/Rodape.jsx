import dadosRodape from "../service/dados-rodape";
import '../style/rodape.css';

function Rodape() {
    return(
        <div className="rodape-redes">
            {dadosRodape.map(redes => {
                return(
                    <div class="redes-sociais"> 

                    <img src={redes.icone} alt={redes.rede}/>
                    <h3>{redes.rede}</h3>
                    <p>
                    <a href={redes.link} target="_blank">{redes.ig}</a>
                    </p>

                    </div>
                )
            })}
            
        </div>
    );
};

export default Rodape;