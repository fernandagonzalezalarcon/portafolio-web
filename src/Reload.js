import './App.css';
import reload from './imagenes/reload.png';

function Reload() {
  return (
    <div className="reload-texto">
        <div className="rectangulo6"></div>

        <img src={reload} alt="reload" className="reload-imagen" />

        <h1>RELOAD 2025</h1>
        <p>Diseñamos el layout general del evento de Año Nuevo RELOAD, ilustrando los distintos espacios y servicios disponibles para el público. Con esto se busca representar visualmente la distribución del lugar, facilitanto la orientación y experiencia de los asistentes<br /><br />En colaboración con Viktor Santana.<br /><br />Año 2024.<br /><br />Illustrator.</p>
    </div>
  );
}

export default Reload;