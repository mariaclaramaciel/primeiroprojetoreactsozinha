import pedrasEscolhidas from "../service/dados"
import '../style/listapedras.css'

function ListaPedras() {
    return (
        <div className="bloco-pedras">
            {pedrasEscolhidas.map(pedra => {
                return(
                    <div className="card"> 
                        <img src={pedra.foto} alt={pedra.nome}/>
                        <h2>{pedra.nome}</h2>
                        <h3>{pedra.chakra}</h3>
                        <p>{pedra.energia}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ListaPedras