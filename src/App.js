import './App.css';

import Topo from './components/Topo/Topo';
import Conteudo from './components/Conteudo/Conteudo'
import Rodape from './components/Rodape/Rodape';


function App() {
  return (
    <div className="App">
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;
