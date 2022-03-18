import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import AuthContext from './Context/auth/authContext'
import FormLogin from './modules/Login/FormLogin/FormLogin';

const Private = ({path, component: Component}) => {
    console.log(path, Component);
    // let autenticado = true
    const {auten}  = useContext(AuthContext)
    console.log(auten)
    
    //path="/auth/login" 
    return (
        auten ? <Route path={path} component={Component} /> :  <Route to="/auth/login" component={FormLogin} /> 
    )
}

export default Private
