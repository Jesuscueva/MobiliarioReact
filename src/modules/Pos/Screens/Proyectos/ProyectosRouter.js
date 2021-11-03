import React from 'react'

import ProyectosFiltrado from './Components/ProyectosFiltrado'
import ProyectosImgPresentacion from './Components/ProyectosImgPresentacion'

const ProyectosRouter = () => {
    return (
        <div>
            <ProyectosImgPresentacion />
            <ProyectosFiltrado />
            {/* <ProyectosCards /> */}
        </div>
    )
}

export default ProyectosRouter
