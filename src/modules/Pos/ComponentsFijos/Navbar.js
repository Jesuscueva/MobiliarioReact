import React from 'react'
import {Link} from "react-router-dom"
import img from "../../../Assets/LogoMobiliarioRGB.png"

const Navbar = () => {
    return (
        <>
            <div className="principal">
                <div className="header__logo">
                    <Link to="/" className= "header__img">
                        <img src={img} alt="Logo MOBILIARIO" />
                    </Link>
                </div>
                <header className="header__navbar">
                    <div className="overly__opacity "></div>
                    
                    <ul className="container_lista">
                        <li className="lista">
                            <Link to="/">
                                INICIO
                            </Link>
                        </li>
                        <li className="lista">
                            <Link  to="/nosotros">
                                NOSOTROS
                            </Link>
                        </li>
                        <li className="lista selec_hover hover lista_mobil ">
                            <a className="link_servicios"> SERVICIOS <i className="icono__sub_menu fas fa-angle-down"></i></a> 
                            <div className="sub__lista" id="sub__list">
                                <div className="lista_second lista_second_mobil" >
                                    <Link className="link__sub_lista " to="/servicio/instalacion">
                                        INSTALACIÓN <i className="icono fas fa-angle-double-right"></i>
                                    </Link>
                                </div>
                                <div className="lista_second lista_second_mobil">
                                    <Link className="link__sub_lista" to="/servicio/diseno">
                                        DISEÑO <i className="icono fas fa-angle-double-right"></i>
                                    </Link>
                                </div>
                                <div className="lista_second lista_second_mobil">
                                    <Link className="link__sub_lista" to="/servicio/fabricacion">
                                        FABRICACIÓN <i className="icono fas fa-angle-double-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="lista">
                            <Link to="/proyectos" >
                                PROYECTOS 
                            </Link>
                        </li>
                        <li className="lista">
                            <Link className="link5" to="/contacto">
                                CONTACTO
                            </Link>
                        </li>
                    </ul>
                    <div className="menu menu_principal" id="menu_principal">
                        <div className="contenedor__bars">
                            <i className="fas fa-bars " id="open_menu"></i>
                        </div>
                    </div>
                </header>
            </div>


        </>
    )
}

export default Navbar
