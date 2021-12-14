import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import CabeceraUsuario from './ComponentsFijos/CabeceraUsuario'
import Navbar from './ComponentsFijos/Navbar'
import LoginMobiliario from './LoginAdmin/LoginMobiliario'
import VistaCorreoPrincipal from './Screens/Correos/VistaCorreoPrincipal'
import VistaProyectosPrincipal from './Screens/Proyectos/VistaProyectosPrincipal'

const AdminRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <CabeceraUsuario />
                <Switch>
                    {/* <Route path="/admin/proyectos" component={VistaProyectosPrincipal} /> */}
                    {/* <Route path="/admin/correos" component={VistaCorreoPrincipal}/> */}
                    {/* <Route path="/admin/login" component={LoginMobiliario} /> */}
                </Switch>

            </BrowserRouter>
        </>
    )
}

export default AdminRouter
