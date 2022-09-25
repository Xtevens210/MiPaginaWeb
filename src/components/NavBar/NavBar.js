import React, { useEffect, useState } from 'react';
import '../../styles/NavBar.css';
import NavBarConvencional from './NavBarConvencional';
import NavBarHamburguesa from './NavBarHamburguesa';




export default function NavBar() {
  const [ windowSize, setWindowSize ] = useState(getWindowSize());
  const [ pantallaChica, setPantallaChica ] = useState(false);

  //Estado useEfect que recoge el tamaño de la pantalla y lo almacena para trabajar con el.
  useEffect(() => {

    if(getWindowSize().innerWidth > 999){
      setPantallaChica(false);
    }else if( getWindowSize().innerWidth <= 999){
      setPantallaChica(true);
    }
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      //Cada vez que el escuchador se ejecuta el va a ejecutar esta funcion lo que hace es cuando obtiene el tamaño de la pantalla el ejecuta el if que comprueba su tamaño y lo que ahra es mostrar una barra de navegacion con opciones clasicas para pantallas grande y mostrara una barra de navegacion tipo menu hamburguesa cuando este pequeña la pantalla.
      if(getWindowSize().innerWidth > 980){
        setPantallaChica(false);
      }else if( getWindowSize().innerWidth <= 980){
        setPantallaChica(true);
      }
    }

    window.addEventListener('resize', handleWindowResize);


    return () => {
      window.removeEventListener('resize', handleWindowResize);

    };

  }, []);





  return (
    <div className="nav-bar__div--container">
      {pantallaChica ? (<NavBarHamburguesa/>):(<NavBarConvencional/>)}
    </div>
  )
}

//Funcion que toma el tamaño de la pantalla en todo momento.
function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}