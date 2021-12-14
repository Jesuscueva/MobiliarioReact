import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import AdminRouter from './modules/Admin/AdminRouter'
import PosRouter from './modules/Pos/PosRouter'
import Private from "./Private"


const App = () => {
  const hash = window.location
  console.log(hash)
  return (
    
    <BrowserRouter>
      <Switch>
        <Private path="/admin" component={AdminRouter} /> 
        <Route path="/" exact component={PosRouter}/>
        <Redirect to={hash} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
