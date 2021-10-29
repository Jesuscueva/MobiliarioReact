import React from 'react'
import logo from "../../../Assets/LogoMobiliarioSloganRGB.png"

const SecondNav = () => {
    return (
        <>

            <div className="nav__secondary">
                <div className="contendor__logo">
                    <figure className="figure_logo_second">
                        <img src={logo} alt="LOGO EMPRESA" />
                    </figure>
                </div>
                <div className="menu">
                    <div className="contenedor__bars" id="contenedor__bars">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>

            <div className="wrapper__navbar_second">
                <div className="overly__second"></div>
                
                    <ul className="navbar__second_lista">
                        
                        <li className="lista__nav">
                            <a href="/home" className="link__nav link_nav_mobil">INICIO
                                <i className="fas fa-angle-double-right"></i>
                            </a>
                        </li>
                        <li className="lista__nav">
                            <a href="/nosotros" className="link__nav link_nav_mobil">NOSOTROS
                                <i className="fas fa-angle-double-right"></i>
                            </a>
                        </li>
                        <li className="lista__nav lista__nav_servicios ">
                            <a  className="link__nav link__nav_service">
                                SERVICIOS
                                <i className="icono_top fas fa-angle-down"></i>
                            </a>
                            <div className="sub__lista_float" id="sub__list">
                                <div className="lista_second_float" >
                                    <a className="link__sub_lista_float sub_link_nav_mobil" href="/servicio/instalacion">INSTALACIÓN <i className="fas fa-angle-double-right"></i></a>
                                </div>
                                <div className="lista_second_float">
                                    <a className="link__sub_lista_float " href="/servicio/diseno">DISEÑO <i className=" fas fa-angle-double-right"></i></a>
                                </div>
                                <div className="lista_second_float">
                                    <a className="link__sub_lista_float sub_link_nav_mobil" href="/servicio/fabricacion">FABRICACIÓN <i className=" fas fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </li>
                        <li className="lista__nav ">
                            <a href="#/proyectos"  className="link__nav link_nav_mobil">
                                PROYECTOS
                            </a>
                        </li>
                        <li className="lista__nav">
                            <a href="/contacto" className="link__nav link_nav_mobil ">
                                CONTACTO
                                <i className="fas fa-angle-double-right"></i>
                            </a>
                        </li>

                    </ul>
            </div>

        </>
    )
}

export default SecondNav
