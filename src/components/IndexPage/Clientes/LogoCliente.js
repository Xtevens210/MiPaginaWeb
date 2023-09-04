import React from 'react';
import '../../../styles/LogoCliente.css';

const LogoCliente = (props) => {
    const {logo, texto} = props;
    return (
        <div className='logo-cliente__div--container'>
            <img src={logo} alt={logo}/>
            <p>{texto}</p>
        </div>
    )
}

export default LogoCliente;