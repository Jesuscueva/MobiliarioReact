import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import AuthState from './Context/auth/authState'
import AdminRouter from './modules/Admin/AdminRouter'
import LoginRouter from './modules/Login/LoginRouter'
import PosRouter from './modules/Pos/PosRouter'
import Private from './Private'
// import "bootstrap/dist/css/bootstrap.css"


const App = () => {
  
  return (
    <AuthState>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={LoginRouter}/>
        <Private path="/admin" component={AdminRouter}/>
        <Route path="/" exact component={PosRouter}/>
        {/* <Redirect to={hash} /> */}
      </Switch>
    </BrowserRouter>
    </AuthState>

  )
}

export default App
