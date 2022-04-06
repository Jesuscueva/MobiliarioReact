import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import servicioFabricacion from './servicioFabricacion'
import servicioInstalacion from './servicioInstalacion'

const ServiciosPrincipal = () => {
    return (
        <div>
            <Switch>
                <Route path="/servicio/fabricacion" component={servicioFabricacion} />
                <Route path="/servicio/instalacion" component={servicioInstalacion} />
            </Switch>
        </div>
    )
}

export default ServiciosPrincipal
