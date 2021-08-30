import Cabecalho from './components/Cabecalho';
import ListaPedras from './components/ListaPedras';
import Rodape from './components/Rodape';
import Nota from './components/Nota';
import './style/global.css';

function App() {
  return (
    <div>
      <Cabecalho/>
      <ListaPedras/>
      <Nota/>
      <Rodape/>
    </div>
  );
}

export default App;
