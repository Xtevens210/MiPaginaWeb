import React from 'react';
import '../../styles/NavBarConvencional.css';
import logo from '../../public/images/Logo portafolio CV.jpg';

export default function NavBarConvencional() {
  return (
    <div className="nav-bar-convencional__div--container">
      <div className="nav-bar-convencional__div--accesos">
        <a href='#acercaDeMi'>Acerca de mi</a>
        <a href='#educacion'>Educación</a>
        <a href='#habilidades'>Habilidades</a>
        <a href='#contacto'>Contacto</a>
        <a href='#tecnologias'>Tecnologias</a>
        <a href='#servicios'>Servicios</a>
      </div>
      <div className="nav-bar-convencional__div--logo-letrero">
        <img src={logo} alt="logo.png"/>
        Xtevens210
      </div>
    </div>
  )
}
