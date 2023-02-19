import React from 'react';
import IconosTecnologia from './IconosTecnologia';
import '../../../styles/Tecnologias.css';

//Imagenes
import javascript from '../../../public/images/javascript-icono.png';
import html from '../../../public/images/html-icono.png';
import css from '../../../public/images/css-icono.png';
import react from '../../../public/images/react-icono.png';
import figma from '../../../public/images/figma-icono.png';
import gitHub from '../../../public/images/github-icono.png';
import bootstrap from '../../../public/images/bootstrap-icono.png';
import mongo from '../../../public/images/mongo-icono.png';
import python from '../../../public/images/python-icono.png';

export default function Tecnologias() {
    return (
        <div id='tecnologias' className="tecnologias__div--container">
            <div className="tecnologias__div--seccion-iconos">
                <h2 className="tecnologias__h2--tecnologias">Tecnologias</h2>
                <div className="tecnologias__div--grid-iconos">
                    <IconosTecnologia imagen={javascript} alt="javascript" txt="Javascript"/>
                    <IconosTecnologia imagen={html} alt="html" txt="HTML"/>
                    <IconosTecnologia imagen={css} alt="css" txt="CSS"/>
                    <IconosTecnologia imagen={react} alt="react" txt="React"/>
                    <IconosTecnologia imagen={figma} alt="figma" txt="Figma"/>
                    <IconosTecnologia imagen={gitHub} alt="git-hub" txt="GitHub"/>
                    <IconosTecnologia imagen={bootstrap} alt="bootstrap" txt="Bootstrap"/>
                    <IconosTecnologia imagen={mongo} alt="mongo" txt="Mongo DB"/>
                    <IconosTecnologia imagen={python} alt="python" txt="Python"/>
                </div>
            </div>
        </div>
    )
}
