import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import AuthContext from './Context/auth/authContext'

const Private = ({path, component: Component}) => {
    console.log(path, Component);
    //let autenticado = true
    const {autentic}  = useContext(AuthContext)
    console.log(autentic)
    

    return (
        autentic ? <Route path={path} component={Component} /> :  <Redirect to="auth/login" /> 
    )
}

export default Private
