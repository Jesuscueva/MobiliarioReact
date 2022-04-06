import React, { useContext, useEffect } from 'react'
import { Redirect, Route } from 'react-router'
import AuthContext from './Context/auth/authContext'
import FormLogin from './modules/Login/FormLogin/FormLogin'

const Private = ({path, component: Component}) => {

    const {sesionOk, cargando, autenticado}  = useContext(AuthContext)
    console.log("Privateee... ")
    console.log(sesionOk, cargando, autenticado)
    
    if(cargando){
        return <h1>Cargando..</h1>
    }else{
        return(
            sesionOk ? <Route path={path} component={Component} /> : <Redirect to="/auth/login"  /> 
        )
    }
}

export default Private
