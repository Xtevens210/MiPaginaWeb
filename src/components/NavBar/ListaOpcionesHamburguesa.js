import React from 'react';
import '../../styles/ListaOpcionesHamburguesa.css';

export default function ListaOpcionesHamburguesa(props) {
    return (
        <div onClick={() => props.clickOpcion()} className="lista__div--container">
            <div className="lista__div--cajon-opciones">
                <a onClick={() => props.clickOpcion()} href='#acercaDeMi'>Acerca de mi</a>
                <a onClick={() => props.clickOpcion()} href='#educacion'>Educación</a>
                <a onClick={() => props.clickOpcion()} href='#habilidades'>Habilidades</a>
                <a onClick={() => props.clickOpcion()} href='#contacto'>Contacto</a>
                <a onClick={() => props.clickOpcion()} href='#tecnologias'>Tecnologias</a>
                <a onClick={() => props.clickOpcion()} href='#servicios'>Servicios</a>
            </div>
        </div>
    )
}
