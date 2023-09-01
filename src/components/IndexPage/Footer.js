import React from 'react';
import '../../styles/Footer.css';

//Imagenes
import logo from '../../public/images/Logo portafolio CV.jpg';
import ubicacion from '../../public/images/ubicacion.png';
import telefono from '../../public/images/telefono.png';
import correo from '../../public/images/correo.png';
import whatsapp from '../../public/images/whatsapp.png';


const Footer = () => {

    return (
        <div className='footer__div--container'>
            <div className='footer__div--informacion'>
                <div className='footer__div--logo'>
                    <p>
                        Xtevens210
                    </p>
                    <img src={logo} alt='logo-xtevens210'/>
                    <p>
                        Desarrollo web profesional
                    </p>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='footer__div--datos'>
                    <div>
                        <div className='footer__div--paquete-dato'>
                            <img src={ubicacion} alt=''/>
                            <p>Medellín, Colombia</p>
                        </div>
                        <div className='footer__div--paquete-dato'>
                            <img src={correo} alt=''/>
                            <p>stevendevofi@gmail.com</p>
                        </div>
                        <div className='footer__div--paquete-dato'>
                            <img src={telefono} alt=''/>
                            <p>+57 3007162596</p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='footer__div--comunicacion'>
                    <p>
                        Contacto
                    </p>
                    <a href="https://wa.me/573007162596">
                        <img src={whatsapp} alt='whatsapp'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;