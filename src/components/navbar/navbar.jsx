import React,{useState} from "react";
import { Link } from "react-router-dom";

import "./sass/mobile.scss"
import "./sass/tablet.scss"
import "./sass/desktop.scss"


import functions from "./js/handleToggle";
import hoverFunctions from "./js/handleHover";

export default function NavBar(){

    return (
        <nav className="navigations__container">
            <nav className="navigation__desktop">
                <section className="logo">
                    <figure>
                        <Link to="/">
                            <img src="/src/assets/images/logos/logo_IDEEN.png" alt="Logo composed of a rhombus and the initials of the university in green and blue"/>
                        </Link>
                    </figure>
                </section>
                
                <section className="navigation">
                    <Link to="/oferta-educativa">
                        <span>Oferta Educativa</span>
                    </Link>
                    <Link to="/campus">
                        <span>Campus</span>
                    </Link>
                    <Link to="/noticias">
                        <span>Noticias</span>
                    </Link>
                    <Link to="/acerca-de">
                        <span>Acerca de</span>
                    </Link>
                    <Link to="/contactanos">
                        <span>Contactanos</span>
                    </Link>
                </section>

                <section className="community">
                    <a href="https://moodle.institutoideen.com/" target="_blank" className="effect">
                    </a>
                </section>
            </nav>

            <div className="navigation__mobile">
                <nav className="navbar" id="navbarMobile">
                    <section className="navbar__ideen-buttons">
                        <article className="logo">
                            <figure className="">
                                <a href="">
                                    <img className="logo__mainImage" id="imgMainLogo" src="/src/assets/images/logos/logo_IDEEN.png" alt="Logo composed of a rhombus and the initials of the university in green and blue"/>
                                    <img className="logo__layerImage" id="imgLayerLogo" src="/src/assets/images/logos/logo_IDEEN_White.png" alt="Logo composed of a rhombus and the initials of the university in green and blue"/>
                                </a>
                            </figure>

                        </article>

                        <article className="community">
                            <a href="" className="effect">
                            </a>
                        </article>
                    </section>

                    <section class="burger-icon">
                        <label class="burger" for="burger">
                            <input class="line" type="checkbox" id="burger" onClick={(e)=>functions.activeLayer(e,"layerContainer")} />
                        </label>
                    </section>
                </nav>

                <section className="navigation__layer " id="layerContainer">
                    <section className="layer__links">
                        <article className="links__container">
                            <div className="link__oferta-educativa" onMouseEnter={e=>hoverFunctions.displayMenuExtended(e)}>
                                <Link to="/" className="oferta-educativa">Oferte&nbsp;ducativa</Link>
                                
                            </div>
                            <div className="link__campus" onMouseEnter={e=>hoverFunctions.displayMenuExtended(e)}>
                                <Link to="/">Campus</Link>
                            </div>
                            <div className="link__noticias" onMouseEnter={e=>hoverFunctions.displayMenuExtended(e)}>
                                <Link to="/">Noticias</Link>
                            </div>
                            <div className="link__acercaDe" onMouseEnter={e=>hoverFunctions.displayMenuExtended(e)}>
                                <Link to="/">Acerca de</Link>
                            </div>
                            <div className="link__contactanos" onMouseEnter={e=>hoverFunctions.displayMenuExtended(e)}>
                                <Link to="/">Contactanos</Link>
                            </div>
                        </article>
                        <article className="list__extend">
                            <div className="extend__oferta-educativa extended" id="oferta-educativa">
                                <Link className="links__administracion"  >Administracion</Link>
                                <Link className="links__derecho" >Derecho</Link>
                                <Link className="links__enfermeria" >Enfermeria</Link>
                                <Link className="links__ingenieria-civil" >Ingenieria civil</Link>
                                <Link className="links__ingenieria-industrial" >Ingenieria industrial</Link>
                                <Link className="links__psicologia">Psicologia</Link>
                            </div>
                        </article>
                    </section>
                    <section className="community__container">
                        <article   article className="community">
                            <a href="" className="effect">
                            </a>
                        </article>
                    </section>
                </section>
            </div>
        </nav>
    )
};

