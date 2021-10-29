import React from 'react'
import compremetidos from "../../../../../Assets/saludoCard.jpg"
import equipo from "../../../../../Assets/equipo.jpg"
import experiencia from "../../../../../Assets/Experiencia.jpg"
import calidad from "../../../../../Assets/calidad.jpg"

const HomeCards = () => {
    return (
        <div>
                <section className="section__two ">
                    <h2 className="section__two_titulo titulo__ efecto ">
                        PORQUE CONFIAR <strong>EN NOSOTROS</strong>
                    </h2>
                    <div className="contenedor__cards">
                        <div className="card efecto">
                            <div className="card__header">
                                <img src={compremetidos} alt="COMPROMETIDOS" />
                            </div>
                            <div className="card__icono efecto">
                                <i className="fas fa-hands-helping"></i>
                            </div>
                            <div className="card__body">
                                <h4>Comprometidos</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tin Ut wisi enim ad minim 
                                </p>
                            </div>
                        </div>

                        <div className="card efecto">
                            <div className="card__header">
                                <img src={equipo} alt="COMPROMETIDOS" />
                            </div>
                            <div className="card__icono efecto">
                                <span className="iconify iconito" data-inline="false" data-icon="fa-solid:user-tie"></span>
                            </div>
                            <div className="card__body">
                                <h4>Equipo de Calidad</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tin Ut wisi enim ad minim 
                                </p>
                            </div>
                        </div>

                        <div className="card efecto">
                            <div className="card__header">
                                <img src={experiencia} alt="COMPROMETIDOS" />
                            </div>
                            <div className="card__icono efecto">
                                <span className="iconify iconito" data-inline="false" data-icon="fluent:people-team-28-filled"></span> 
                            </div>
                            <div className="card__body">
                                <h4>Experiencia</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tin Ut wisi enim ad minim 
                                </p>
                            </div>
                        </div>

                        <div className="card efecto">
                            <div className="card__header">
                                <img src={calidad} alt="COMPROMETIDOS" />
                            </div>
                            <div className="card__icono efecto">
                                <span className="iconify iconito" data-inline="false"       data-icon="fa-solid:user-cog"></span>
                            </div>
                            <div className="card__body">
                                <h4>Ofrecemos valor</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tin Ut wisi enim ad minim 
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default HomeCards
