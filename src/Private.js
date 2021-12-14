import React from 'react'
import { Redirect, Route } from 'react-router'
import LoginMobiliario from './modules/Admin/LoginAdmin/LoginMobiliario'
// import {LoginMobiliario} from "./modules/Admin/LoginAdmin/LoginMobiliario"

const Private = ({path, component: Component}) => {
    let autenticado = true

    

    return (
                autenticado ? <Route path="/admin/login" component={LoginMobiliario} /> :  <Route path={path} component={Component} /> 
    )
}

export default Private
