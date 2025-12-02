import './App.css';
import Caballerocruzado from './imagenes/Caballerocruzado.png';
import Melvin from './imagenes/Melvin.png';
import Paletasplaya from './imagenes/Paletasplaya.png';
import Palmera from './imagenes/Palmera.png';

function Stickers() {
  return (
    <div className="stickers-texto">
    <div className="rectangulo5"></div>

        <img src={Caballerocruzado} alt="stickers" className="caballerocruzado-imagen" />
        <img src={Melvin} alt="stickers" className="melvin-imagen" />
        <img src={Paletasplaya} alt="stickers" className="paletasplaya-imagen" />
        <img src={Palmera} alt="stickers" className="palmera-imagen" />

        <h1>Stickers</h1>
        <p>En mi tiempo libre disfruto ilustrando stickers al estilo ya mencionado de caricaturas estadounidences. Por el momento tengo una especie de colección de clásico verano chileno. Además del icónico personaje del Club Deportivo de Universidad Católica, el Caballero Cruzado.<br /><br />Año 2024.<br /><br />Illustrator.</p>
    </div>
  );
}

export default Stickers;