import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import AuthContext from './Context/auth/authContext'

const Private = ({path, component: Component}) => {
    console.log(path, Component);
    const {sesionOk, cargando}  = useContext(AuthContext)
    console.log("Privateee... ")
    console.log(sesionOk, cargando)
    
    
    if(cargando){
        return <h1>Cargando..</h1>
    }else{
        return(
            sesionOk ? <Route path={path} component={Component} /> : <Redirect to="/auth/login" /> 
        )
    }
}

export default Private
