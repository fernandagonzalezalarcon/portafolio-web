import './App.css';
import miImagen from './imagenes/carpeta.png';

function Portada() {
  return (
    <div className="portada-container">
      <img src={miImagen} alt="Carpeta" className="portada-imagen" />

    <div className="portada-texto">
      <h1>PORTAFOLIO</h1>
       <p>Diseño gráfico<br />
       Fernanda González A.</p>
    </div>
    </div>
  );
}

export default Portada;