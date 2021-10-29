import React from 'react'
import {HashRouter, Route, Switch} from "react-router-dom"
import Footer from './ComponentsFijos/Footer'
import Navbar from './ComponentsFijos/Navbar'
import SecondNav from './ComponentsFijos/SecondNav'
import ContactoRouter from './Screens/Contacto/ContactoRouter'
import HomeRouter from './Screens/Home/HomeRouter'
import NosotrosRouter from './Screens/Nosotros/NosotrosRouter'
import ProyectosRouter from './Screens/Proyectos/ProyectosRouter'

const PosRouter = () => {
    return (
        <main className="main">
        <HashRouter>
                <SecondNav />
                <Navbar />
                <Switch>
                    {/*
                        <Route path="/servicio/fabricacion" component /> 
                        <Route path="/servicio/diseno" component /> 
                        <Route path="/servicio/instalacion" component /> 
                     */}
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

