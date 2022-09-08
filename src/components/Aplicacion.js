import React from 'react';

//Componentes
import AcercaDe from './AcercaDe';
import BannerPrincipal from './BannerPrincipal';
import Contacto from './Contacto';
import ContactoWhatsApp from './ContactoWhatsApp';
import Educacion from './Educacion';
import Habilidades from './Habilidades';
import Tecnologias from './Tecnologias/Tecnologias';
import TituloPagina from './TituloPagina';

export default function Aplicacion() {
    return (
    <>
        <header>
            <TituloPagina/>
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
        </section>
    </>
    )
}
