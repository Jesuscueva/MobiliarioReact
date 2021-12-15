import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FormLogin from './FormLogin/FormLogin'

const LoginRouter = () => {
    return (
        <Switch>
            <Route path="/auth/login" component={FormLogin} />
        </Switch>
    )
}

export default LoginRouter
