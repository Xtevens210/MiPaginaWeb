import React from 'react';
import '../../../styles/IconosTecnologia.css';

export default function IconosTecnologia(props) {
    return (
        <div className="icono__div--container">
            <div className="icono__div--borde-icono">
                <img className={`icono__img icono__img--${props.txt}`} src={props.imagen} alt={props.alt}/>
                <h3 className={`icono__h3 icono__h3--${props.txt}`} >{props.txt}</h3>
            </div>
        </div>
    )
}
