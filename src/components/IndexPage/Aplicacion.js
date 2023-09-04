import React from "react";

//Componentes
import AcercaDe from "./AcercaDe";
import BannerPrincipal from "./BannerPrincipal";
import Contacto from "./Contacto";
import ContactoWhatsApp from "./ContactoWhatsApp";
import Educacion from "./Educacion";
import Habilidades from "./Habilidades";
import Servicios from "./Servicios";
import Tecnologias from "./Tecnologias/Tecnologias";
import Clientes from "./Clientes/Clientes";
import Footer from "./Footer";


export default function Aplicacion() {
  return (
    <>
      <section>
        <article>
          <BannerPrincipal />
        </article>
        <article>
          <AcercaDe />
        </article>
        <article>
          <Educacion />
        </article>
        <article>
          <Habilidades />
        </article>
        <article>
          <Contacto />
        </article>
        <article>
          <ContactoWhatsApp />
        </article>
        <article>
          <Tecnologias />
        </article>
        <article>
          <Servicios />
        </article>
        <article>
          <Clientes />
        </article>
        <article>
          <Footer />
        </article>
      </section>
    </>
  );
}
