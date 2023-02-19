import React from 'react';
import '../../styles/Servicios.css';

export default function Servicios() {
    return (
        <div id='servicios' className="servicios__div--container">
            <div className="servicios__div--seccion-servicios">
                <h2 className="servicios__h2--servicios">Servicios</h2>
                <ul className="servicios__ul--lista-servicios">
                    <li>Diseño de pagina web</li>
                    <li>Desarrollo de pagina web</li>
                    <li>Desarrolo de aplicaciones web y de escritorio</li>
                </ul>
                <p>
                La construccion, el diseño y la diferenciacion de crear una pagina web respecto a las demas se da desde el trabajo en conjunto con el cliente, desde el apoyo creativo hasta el desarrollo de esas ideas logrando proporcionar no solo una web para sus clientes sino tambien el crecimiento a partir de ella.
                </p>
            </div>
        </div>
    )
}
