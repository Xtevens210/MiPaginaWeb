import React from 'react';
import '../../styles/TarjetaPortafolio.css';


const TarjetaPortafolio = (props) => {
    const { img, nombre } = props;

    return (
        <div className='tarjeta-portafolio__div--container'>
            <img src={img} alt='proyecto'/>
            <p>{nombre}</p>
        </div>
    )
};

export default TarjetaPortafolio;