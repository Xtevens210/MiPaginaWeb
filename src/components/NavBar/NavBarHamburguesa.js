import React, { useState } from 'react';

//Estilos
import '../../styles/NavBarHamburguesa.css';

//Imagenes
import hamburguesa from '../../public/images/menu-hamburguesa.png';
import equis from '../../public/images/equis-hamburguesa.png';
import logo from '../../public/images/Logo portafolio CV.jpg';

//Componentes
import ListaOpcionesHamburguesa from './ListaOpcionesHamburguesa';

export default function NavBarHamburguesa() {
  const [ botonHamburguesa, setBotonHamburguesa ] = useState(true);

  const accionBotonHamburguesa = () => {
    if(botonHamburguesa === true){
      setBotonHamburguesa(false);
    }else if(botonHamburguesa === false){
      setBotonHamburguesa(true);
    }
  }

  const clickOpcion = () => {
    setBotonHamburguesa(true);
  }

  let hamburguesaBoton = (<img className="hamburguesa__img--hamburguesa" onClick={() => accionBotonHamburguesa()} src={hamburguesa} alt="botonHamburguesa.png"/>)

  let equisBoton = (<img className="hamburguesa__img--hamburguesa"  onClick={() => accionBotonHamburguesa()} src={equis} alt="botonHamburguesa.png"/>)


  return (
    <div className="hamburguesa__div--container">
      <div className="hamburguesa__div--boton">
        {botonHamburguesa ? (hamburguesaBoton):(equisBoton)}
      </div>
      <div className="hamburguesa__div--logo">
        <img src={logo} alt="logo.png"/>
        Xtevens210
      </div>
      <div className="hamburguesa__div--lista">
          {botonHamburguesa ? (""):(<ListaOpcionesHamburguesa clickOpcion={clickOpcion}/>)}
      </div>
    </div>
  )
}
