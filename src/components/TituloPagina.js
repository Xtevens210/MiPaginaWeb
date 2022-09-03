import React from 'react';
import '../styles/TituloPagina.css';
import logo from '../public/images/Logo portafolio CV.jpg';

export default function TituloPagina() {
  return (
    <div className="titulo-de-pagina__div--container">
      <div className="titulo-de-pagina__div--logo-nombre">
        <img className="titulo-de-pagina__img--imagen" src={logo} alt="logo-principal.jpg"/>
        <h1 className="titulo-de-pagina__h1--xtevens210">Xtevens210</h1>
      </div>
    </div>
  )
}
