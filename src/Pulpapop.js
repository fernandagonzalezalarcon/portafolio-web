import './App.css';
import pulpapop from './imagenes/pulpapop.png';

function Pulpapop() {
  return (
    <div className="pulpapop-texto">
    <div className="rectangulo4"></div>

    <img src={pulpapop} alt="pulpapop" className="pulpapop-imagen" />

        <h1>Pulpapop</h1>
        <p>En el ramo de Fabricación Digital II Packaging realizamos un packaging alimentario estructural, para un producto ficticio construido por 5 esferas de 3,5cm de diámetro, el cual debe fomentar el consumo de comida saludable y el packaging debe ser completamente ensamblado, y en colaboración con el ramo de Retoque Digital Avanzado, se creó una afiche publicitario, fotografiando un modelo y posteriormente utilizando las herramientas vistas en clases.<br />Nosotros creamos jugo en polvo comprimido de distintos sabores de fruta sellados al vacio.<br /><br />En colaboración con Viktor Santana.<br /><br />Año 2024 (2do Semestre).<br /><br />Illustrator y Photoshop.</p>
    </div>
  );
}

export default Pulpapop;