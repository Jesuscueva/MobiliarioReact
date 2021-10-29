import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import PosRouter from './modules/Pos/PosRouter'


const App = () => {
  const hash = window.location
  console.log(hash)
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" />
        <Route path="/" exact component={PosRouter}/>
        <Redirect to={hash} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
