import React from 'react';
import '../../styles/ContactoWhatsApp.css';

import QR from '../../public/images/codigo QR whatsapp.png';
import whatsapp from '../../public/images/whatsapp.png';

export default function ContactoWhatsApp() {
    return (
    <div className="contacto-wh__div--container">
        <div className="contacto-wh__div--seccion-wh">
            <div className="contacto-wh__div--qr">
                <h3 className="contacto-wh__h3 contacto-wh__h3--puedes-escanear">Puedes escanear el codigo QR de whatsapp para contactarte conmigo</h3>
                <div className="contacto-wh__div--contenedor-img-qr"  >
                    <img className="contacto-wh__img contacto-wh__img--imagen-qr" src={QR} alt="QR.png"/>
                </div>
            </div>
            <div className="contacto-wh__div--logowp">
                <h3 className="contacto-wh__h3 contacto-wh__h3--o-presiona">O presiona sobre el logo de whatsapp y entra directamente al chat</h3>
                <a href="https://wa.me/573007162596"><img className="contacto-wh__img contacto-wh__img--imagen-whatsapp" src={whatsapp} alt="whatsapp.png"/></a>
            </div>
        </div>
    </div>
    )
}
