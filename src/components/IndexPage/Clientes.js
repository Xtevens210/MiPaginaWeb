import React from 'react';
import '../../styles/Clientes.css';

//Imagenes
import udea from '../../public/images/udea.png';
import lacteosBombona from '../../public/images/lacteos-bombona.png';

const Clientes = () => {
    return (
        <div className='clientes__div--container'>
            <div className='clientes__seccion'>
                <h2 className='clientes__h2--clientes'>Clientes</h2>
                <span className='clientes__span--tarjeta'>
                    <img className='clientes__div--img clientes__div--img-udea' src={udea} alt='udea'/>
                    <img className='clientes__div--img clientes__div--img-bombona' src={lacteosBombona} alt='lacteos-bombona'/>
                </span>
            </div>
        </div>
    )
}

export default Clientes;