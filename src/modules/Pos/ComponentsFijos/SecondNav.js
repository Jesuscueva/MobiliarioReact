import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../Assets/LogoMobiliarioFooterRGB.png"

const SecondNav = ({openNabv, openMenu}) => {
    // const [openMenu, setOpenMenu] = useState(true)
    const [openServicios, setOpenServicios] = useState(true)
    
    const d = document
    // const openNabv = () => {
    //     console.log("ddd")
    //     // d.querySelector(".wrapper__navbar_second").classList.toggle("anima")
    //     // d.querySelector(".main").classList.toggle("overflow")
    //     let toggle = openMenu
    //     toggle ? setOpenMenu(false) : setOpenMenu(true)
    // }
    const openServicio = () => {
        let toggle = openServicios
        toggle ? setOpenServicios(false) : setOpenServicios(true)
    }
    const remove = () => {
        console.log("click link")
            d.querySelector(".wrapper__navbar_second").classList.remove("anima")
            d.querySelector(".nav__secondary").classList.remove("anima")
            d.querySelector(".body").classList.remove("overflow")
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
    }

    useEffect(()=>{
        d.addEventListener("scroll", e => {
                
            const $sectionOne = d.querySelector(".section__primary"),
            sectionOne = $sectionOne.offsetTop
            const menuScroll = d.documentElement.scrollTop
            const $navTwo  = d.querySelector(".nav__secondary"),
            $principal = d.querySelector(".principal")
    
            if(sectionOne < menuScroll){
                // console.log("llegue")
                $navTwo.classList.add("anima")
                $principal.style.opacity = "0"
            }else{
                $navTwo.classList.remove("anima")
                setTimeout(e => {
                    $principal.style.transition = ".6s all"
                    $principal.style.opacity = "1"
                }, 300)
            }
        })
    },[])

    return (
        <>

            <div className="nav__secondary">
                <div className="contendor__logo">
                    <figure className="figure_logo_second">
                        <img src={logo} alt="LOGO EMPRESA" />
                    </figure>
                </div>
                <div className="menu">
                    <div className="contenedor__bars" onClick={openNabv} id="contenedor__bars">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>

            <div className={openMenu? "wrapper__navbar_second" : "wrapper__navbar_second anima"}>
                <div className="overly__second"></div>
                
                    <ul className="navbar__second_lista">
                        
                        <li className="lista__nav">
                            <Link to="/" className="link__nav link_nav_mobil">INICIO
                                <i className="fas fa-angle-double-right"></i>
                            </Link>
                        </li>
                        <li className="lista__nav">
                            <Link to="/nosotros" className="link__nav link_nav_mobil">NOSOTROS
                                <i className="fas fa-angle-double-right"></i>
                            </Link>
                        </li>
                        <li className={openServicios? "lista__nav lista__nav_servicios" : "lista__nav lista__nav_servicios anima"} onClick={openServicio}>
                            <a  className={openServicios? "link__nav link__nav_service" : "link__nav link__nav_service selec" }>
                                SERVICIOS
                                <i className="icono_top fas fa-angle-down"></i>
                            </a>
                            <div className="sub__lista_float" id="sub__list">
                                <div className="lista_second_float">
                                    <Link className="link__sub_lista_float sub_link_nav_mobil" to="/servicio/fabricacion">FABRICACIÓN <i className=" fas fa-angle-double-right"></i></Link>
                                </div>
                                <div className="lista_second_float" >
                                    <Link className="link__sub_lista_float sub_link_nav_mobil" to="/servicio/instalacion">INSTALACIÓN <i className="fas fa-angle-double-right"></i></Link>
                                </div>
                                {/* <div className="lista_second_float">
                                    <Link className="link__sub_lista_float " to="/servicio/diseno">DISEÑO <i className=" fas fa-angle-double-right"></i></Link>
                                </div> */}
                                
                            </div>
                        </li>
                        <li className="lista__nav ">
                            <Link to="/proyectos"  className="link__nav link_nav_mobil">
                                PROYECTOS
                                <i className="fas fa-angle-double-right"></i>
                            </Link>
                        </li>
                        <li className="lista__nav">
                            <Link to="/contacto" className="link__nav link_nav_mobil ">
                                CONTACTO
                                <i className="fas fa-angle-double-right"></i>
                            </Link>
                        </li>

                    </ul>
            </div>

        </>
    )
}

export default SecondNav
