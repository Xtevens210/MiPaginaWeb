import React from 'react';
import logo from '../../public/images/Logo portafolio CV.jpg';
import '../../styles/BannerPrincipal.css';

export default function BannerPrincipal() {
    return (
        <div className="banner__div--container">
            <h2 className="banner__h2 banner__h2--bienvenido">Bienvenido a mi sitio web soy</h2>
            <h2 className="banner__h2 banner__h2--steven">Steven Sánchez</h2>
            <h3 className="banner__h3 banner__h3--programador">Programador y desarrollador web</h3>
            <img className="banner__img--image" src={logo} alt="logo.jpg"/>
        </div>
    )
}
