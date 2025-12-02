import './App.css';
import afiche1 from './imagenes/afiche1.png';
import afiche2 from './imagenes/afiche2.png';
import afiche3 from './imagenes/afiche3.png';
import afiche4 from './imagenes/afiche4.png';
import afiche5 from './imagenes/afiche5.png';

function Trama() {
  return (
    <div className="trama-texto">
        <div className="rectangulo3"></div>

        <img src={afiche1} alt="afiche" className="afiche1-imagen" />
        <img src={afiche2} alt="afiche" className="afiche2-imagen" />
        <img src={afiche3} alt="afiche" className="afiche3-imagen" />
        <img src={afiche4} alt="afiche" className="afiche4-imagen" />
        <img src={afiche5} alt="afiche" className="afiche5-imagen" />


        <h1>TRAMA VIVA</h1>
        <p>En el ramo de Taller II Metodología de diseño y en colaboración con el ramo de Modelos II Pixel, creamos cinco afiches sobre una exposición de creación propia, a partir de un texto informativo.<br />Nosotros analizamos un texto sobre la evolución de la artesanía en el diseño, extrajimos conceptos y los trabajamos en el diseño de los afiches, creando a mano las texturas de fondo (tela, papel reciclado, yeso, arcilla y madera) y fotografiándolas.<br /><br />En colaboración con Constanza Díaz, Javiera Vera y Mariana Vivanco.<br /><br />Año 2023 (1er Semestre).<br /><br />Illustrator y Photoshop.</p>
    </div>
  );
}

export default Trama;