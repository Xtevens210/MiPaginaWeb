import React, { useState } from 'react';
import '../../styles/TarjetaPortafolio.css';


const TarjetaPortafolio = (props) => {
    const [enProgreso, setEnProgreso] = useState(true);

    const { img, nombre, descripcion } = props;

    return (
        <div className='tarjeta-portafolio__div--container'>
            <img src={img} alt='proyecto'/>
            <div className='tarjeta-portafolio__div--info'>
                <h4>{nombre}</h4>
                <p>{descripcion}</p>
            </div>
            {enProgreso ? (<button onClick={() => setEnProgreso(false)}>Mas detalles +</button>):(<button onClick={() => setEnProgreso(true)}>En proceso</button>)}
        </div>
    )
};

export default TarjetaPortafolio;