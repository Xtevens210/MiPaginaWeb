import React from 'react';
import '../../../styles/Clientes.css';

//Imagenes
import udea from '../../../public/images/udea.png';
import lacteosBombona from '../../../public/images/lacteos-bombona.png';

//Componentes
import LogoCliente from './LogoCliente';

const Clientes = () => {
    return (
        <div className='clientes__div--container'>
            <div className='clientes__seccion'>
                <h2 className='clientes__h2--clientes'>Clientes</h2>
                <span className='clientes__span--tarjeta'>
                    <LogoCliente logo={udea} texto="Universidad de Antioquia"/>
                    <LogoCliente logo={lacteosBombona} texto="Lácteos Bombona"/>
                </span>
            </div>
        </div>
    )
}

export default Clientes;