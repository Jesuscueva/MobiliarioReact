import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min'
import AuthState from './Context/auth/authState'
//import authState from './Context/auth/authState'
import AdminRouter from './modules/Admin/AdminRouter'
import LoginRouter from './modules/Login/LoginRouter'
import PosRouter from './modules/Pos/PosRouter'
import Private from "./Private"


const App = () => {
  const hash = window.location
  console.log(hash)
  return (
    <HashRouter>

    <AuthState>
        <Switch>
          <Route path="/auth" component={LoginRouter} />
          <Private path="/admin" component={AdminRouter} /> 
          <Route path="/" exact component={PosRouter}/>
          <Redirect to="/" />
        </Switch>

    </AuthState>
    </HashRouter>
  )
}

export default App
