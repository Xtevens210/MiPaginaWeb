import React, { useEffect, useState } from "react";
import "../../styles/NavBar.css";
import Entrada from "../IndexPage/Entrada";
import NavBarConvencional from "./NavBarConvencional";
import NavBarHamburguesa from "./NavBarHamburguesa";

export default function NavBar() {
  const [pantallaChica, setPantallaChica] = useState(false);
  const [entrada, setEntrada] = useState(true);

  //Estado useEfect que recoge el tamaño de la pantalla y lo almacena para trabajar con el.
  useEffect(() => {
    if (getWindowSize().innerWidth > 999) {
      setPantallaChica(false);
    } else if (getWindowSize().innerWidth <= 999) {
      setPantallaChica(true);
    }
    function handleWindowResize() {
      //Cada vez que el escuchador se ejecuta el va a ejecutar esta funcion lo que hace es cuando obtiene el tamaño de la pantalla el ejecuta el if que comprueba su tamaño y lo que hara es mostrar una barra de navegacion con opciones clasicas para pantallas grande y mostrara una barra de navegacion tipo menu hamburguesa cuando este pequeña la pantalla.
      if (getWindowSize().innerWidth > 980) {
        setPantallaChica(false);
      } else if (getWindowSize().innerWidth <= 980) {
        setPantallaChica(true);
      }
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  setTimeout(() => {
    setEntrada(false);
  }, 6000);

  return (
    <div className="nav-bar__div--container">
      {pantallaChica ? <NavBarHamburguesa /> : <NavBarConvencional />}
      {entrada ? <Entrada /> : ""}
    </div>
  );
}

//Funcion que toma el tamaño de la pantalla en todo momento.
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
