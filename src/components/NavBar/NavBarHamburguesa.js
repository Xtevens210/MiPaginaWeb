import React, { useState } from 'react';

//Estilos
import '../../styles/NavBarHamburguesa.css';

//Imagenes
import hamburguesa from '../../public/images/menu-hamburguesa.png';
import equis from '../../public/images/equis-hamburguesa.png';
import logo from '../../public/images/Logo portafolio CV.jpg';
import { useNavigate } from 'react-router-dom';

//Componentes
// import ListaOpcionesHamburguesa from './ListaOpcionesHamburguesa';


export default function NavBarHamburguesa() {
  const [ botonHamburguesa, setBotonHamburguesa ] = useState(true);

  const accionBotonHamburguesa = () => {
    if(botonHamburguesa === true){
      setBotonHamburguesa(false);
    }else if(botonHamburguesa === false){
      setBotonHamburguesa(true);
    }
  }


  let hamburguesaBoton = (<img className="hamburguesa__img--hamburguesa" onClick={() => accionBotonHamburguesa()} src={hamburguesa} alt="botonHamburguesa.png"/>)

  let equisBoton = (<img className="hamburguesa__img--hamburguesa"  onClick={() => accionBotonHamburguesa()} src={equis} alt="botonHamburguesa.png"/>)


  const navegar = useNavigate();

  const irPagina = (direccion) => {
    navegar(direccion);
    accionBotonHamburguesa();
  }

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
        {/* {botonHamburguesa ? ():("")} */}
        <div className='hamburguesa__div--container-opciones' style={{width: botonHamburguesa ? ("0%"):("100%")}}>
          <div className='hamburguesa__div--panel-opciones' style={{width: botonHamburguesa ? ("0%"):("300px")}}>
            <div className='hamburguesa__div--opciones-lista'>
              <button onClick={() => irPagina("/")}>Inicio</button>
              <button onClick={() => irPagina("/portafolio")}>Portafolio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
