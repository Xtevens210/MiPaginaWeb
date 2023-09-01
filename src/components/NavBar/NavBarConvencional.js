import React from 'react';
import '../../styles/NavBarConvencional.css';
import logo from '../../public/images/Logo portafolio CV.jpg';
import { Link } from 'react-router-dom';


export default function NavBarConvencional() {
  return (
    <div className="nav-bar-convencional__div--container">
      <div className="nav-bar-convencional__div--accesos">
        <Link className="nav-bar-convencional__Link" to='/'>Inicio</Link>
        <Link className="nav-bar-convencional__Link" to='/portafolio'>Portafolio</Link>
      </div>
      <div className="nav-bar-convencional__div--logo-letrero">
        <img src={logo} alt="logo.png"/>
        Xtevens210
      </div>
    </div>
  )
}
