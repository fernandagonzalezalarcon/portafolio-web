import './App.css';
import Portada from './Portada';
import Acerca from './Acerca';
import Categoria from './Categoria';
import Laberinto from './Laberinto';
import Revista from './Revista';
import Trama from './Trama';
import Pulpapop from './Pulpapop';
import Categoria2 from './Categoria2';
import Stickers from './Stickers';
import Reload from './Reload';

function App() {
  return (
    <div className="app-container">
      <Portada />
      <Acerca />
      <Categoria />
      <Laberinto />
      <Revista />
      <Trama />
      <Pulpapop />
      <Categoria2 />
      <Stickers />
      <Reload />
    </div>
  );
}

export default App;