import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import CabeceraUsuario from './ComponentsFijos/CabeceraUsuario'
import Navbar from './ComponentsFijos/Navbar'
// import VistaCorreoPrincipal from './Screens/Correos/VistaCorreoPrincipal'
import Dashboard from './Screens/Dashboard/Dashboard'
// import VistaProyectosPrincipal from './Screens/Proyectos/VistaProyectosPrincipal'

const AdminRouter = () => {
    const hash  = window.location
    let history = useHistory()



    return (
        <menu className="menu__administrador">
                <Navbar />
                <div className="contenedor__vistas_admin">
                    <CabeceraUsuario />
                    <div className="contenedor__segunda_part">
                    <Switch>
                        {/*<div>Proximante</div>*/}
                        <Route path="/admin/dashboard" component={Dashboard} /> 
                        {/* <Route path="/admin/proyectos" component={VistaProyectosPrincipal} />  */}
                        {/* <Route path="/admin/correos" component={VistaCorreoPrincipal}/>  */}
                        {/* <Route path="/admin/login" component={LoginMobiliario} /> */}
                    </Switch>
                    </div>
                </div>
        </menu>
    )
}

export default AdminRouter
