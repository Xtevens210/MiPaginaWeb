import React from 'react';
import '../styles/Portafolio.css';

//Imagenes
import whatsapp from '../public/images/whats-portafolio.png';
import linkedin from '../public/images/linkedin-portafolio.png';
import twitter from '../public/images/twitter-portafolio.png';
import gusanitosEscaleras from '../public/images/gusanitos-escaleras-portafolio.png';
import juegoLetras from '../public/images/juego-letras-portafolio.png';
import saludOral from '../public/images/salud-oral-portafolio.png';
import catalogo from '../public/images/catalogo-portafolio.png';
import TarjetaPortafolio from '../components/portafolio/TarjetaPortafolio';

const Portafolio = () => {
    return (
        <div className='portafolio__div--container'>
            {/* redes Sociales */}
            <div className='portafolio__div--redes'>
                <div className='portafolio__div--linea-adorno'>
                    <div className='portafolio__div--redes-iconos'>
                        <img src={whatsapp} alt='whatsapp'/>
                        <img src={linkedin} alt='linkedin'/>
                        <img src={twitter} alt='twitter'/>
                    </div>
                </div>
            </div>

            {/* presentacion */}
            <div className='portafolio__div--presentacion'>
                <h4 className='portafolio__h4--hola-mi-nombre'>Hola, mi nombre es</h4>
                <p className='portafolio__p--steven-sanchez'>Steven Sánchez.</p>
                <p className='portafolio__p--desarrollador-web-full-stack'>Desarrollador full stack</p>
                <p className='portafolio__p--descripcion'>Un apasionado diseñador y desarrollador web freelance. Mi objetivo es hacer que tu presencia en línea sea única y cautivadora. Trabajo para crear soluciones innovadoras que ayuden a tu negocio a destacar en el mundo digital. ¡Contáctame y hagamos realidad tus ideas!</p>
            </div>

            {/* repositorio */}
        <div className='portafolio__div--portafolio-container'>
            <h4 className='portafolio__h4--portafolio'>Bienvenido a mi portafolio</h4>
            <div className='portafolio__div--tarjetas-portafolio'>
                <TarjetaPortafolio img={gusanitosEscaleras} nombre="Juego de escalera con administrador"/>
                <TarjetaPortafolio img={saludOral} nombre="Aplicación interactiva sobre la salud oral"/>
                <TarjetaPortafolio img={catalogo} nombre="Catálogo de productos "/>
                <TarjetaPortafolio img={juegoLetras} nombre="Aplicación interactiva de abecedario "/>
            </div>
        </div>
        </div>
    )
}

export default Portafolio;