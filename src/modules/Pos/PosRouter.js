import React, { useState }  from 'react'
import {HashRouter, Route, Switch} from "react-router-dom"
import Footer from './ComponentsFijos/Footer'
import Navbar from './ComponentsFijos/Navbar'
import SecondNav from './ComponentsFijos/SecondNav'
import ContactoRouter from './Screens/Contacto/ContactoRouter'
import HomeRouter from './Screens/Home/HomeRouter'
import NosotrosRouter from './Screens/Nosotros/NosotrosRouter'
import ProyectosRouter from './Screens/Proyectos/ProyectosRouter'
import ServiciosPrincipal from './Screens/Servicios/ServiciosPrincipal'

const PosRouter = () => {
    const [openMenu, setOpenMenu] = useState(true)
    const openNabv = () => {
        console.log("ddd")
        // d.querySelector(".wrapper__navbar_second").classList.toggle("anima")
        // d.querySelector(".main").classList.toggle("overflow")
        let toggle = openMenu

        if(toggle){
            setOpenMenu(false) 
            document.querySelector(".body").classList.add("overflow")
        }else{
            setOpenMenu(true)
            document.querySelector(".body").classList.remove("overflow")
        }
    }

    return (
        <main className={openMenu? "main" : "main overflow"}>
        <HashRouter>
                <SecondNav openNabv={openNabv} openMenu={openMenu} />
                <Navbar />
                <Switch>
                    
                        <Route path="/servicio" component={ServiciosPrincipal} /> 
                    
                    <Route path="/contacto" component={ContactoRouter} /> 
                    <Route path="/proyectos" component={ProyectosRouter} /> 
                    <Route path="/nosotros" component={NosotrosRouter} />
                    <Route path="/" component={HomeRouter} />
                </Switch>
                <Footer />
        </HashRouter>
        </main>
    )
}

export default PosRouter

