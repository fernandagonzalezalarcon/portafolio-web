import './App.css';
import revista1 from './imagenes/revista1.png';
import revista2 from './imagenes/revista2.png';
import revista3 from './imagenes/revista3.png';

function Revista() {
  return (
    <div className="revista-texto">
        <div className="rectangulo2"></div>

        <img src={revista1} alt="revista" className="revista1-imagen" />
        <img src={revista2} alt="revista" className="revista2-imagen" />
        <img src={revista3} alt="revista" className="revista3-imagen" />

        <h1>Revista Jellycat</h1>
        <p>En el ramo de Modelos I Vector, diseñamos con todas las herramientas vistas anteriormente en el semestre, tres portadas como tres ediciones de una revista de creación propia sobre una marca ya existente o propia.<br />Elegí la juguetería Jellycat y le di un giro a los peluches, ilustrándolos como las clásicas caricaturas estaounidenses de los años 20-30.<br /><br />Año 2023 (1er Semestre).<br /><br />Illustrator.</p>
    </div>
  );
}

export default Revista;