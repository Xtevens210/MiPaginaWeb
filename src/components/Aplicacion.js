import React from 'react';

//Componentes
import AcercaDe from './AcercaDe';
import BannerPrincipal from './BannerPrincipal';
import Educacion from './Educacion';
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
        </section>
    </>
    )
}
