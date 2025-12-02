import './App.css';
import laberinto1 from './imagenes/laberinto1.png';
import laberinto2 from './imagenes/laberinto2.png';

function Laberinto() {
  return (
    <div className="laberinto-texto">
      <div className="rectangulo"></div>

      <div className="laberinto-imagenes">
        <img src={laberinto2} alt="Laberinto" className="laberinto2-imagen" />
        <img src={laberinto1} alt="Laberinto" className="laberinto1-imagen" />
        </div>

        <h1>Laberinto</h1>
        <p>En el ramo de Modelos IV Técnicas de Ilustración Digital, creamos dos ilustraciones que se complementan entre si, a partir de una frase como concepto y evitar la literalidad de ésta en el desarrollo de los posters. Yo utilicé la frase: "Yo no pienso como tú y eso está bien".<br /><br />Año 2024 (5to Semestre).<br /><br />Illustrator y Photoshop.</p>
    </div>
  );
}

export default Laberinto;