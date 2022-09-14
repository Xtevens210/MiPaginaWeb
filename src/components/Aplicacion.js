import React from 'react';

//Componentes
import AcercaDe from './AcercaDe';
import BannerPrincipal from './BannerPrincipal';
import Contacto from './Contacto';
import ContactoWhatsApp from './ContactoWhatsApp';
import Educacion from './Educacion';
import Habilidades from './Habilidades';
import NavBar from './NavBar/NavBar';
import Servicios from './Servicios';
import Tecnologias from './Tecnologias/Tecnologias';


export default function Aplicacion() {
    return (
    <>
        <header>
            <NavBar/>
        </header>
        <section>
            <article>
                <BannerPrincipal/>
            </article>
            <article>
                <AcercaDe/>
            </article>
            <article>
                <Educacion/>
            </article>
            <article>
                <Habilidades/>
            </article>
            <article>
                <Contacto/>
            </article>
            <article>
                <ContactoWhatsApp/>
            </article>
            <article>
                <Tecnologias/>
            </article>
            <article>
                <Servicios/>
            </article>
        </section>
    </>
    )
}
