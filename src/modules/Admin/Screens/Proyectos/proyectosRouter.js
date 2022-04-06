import React from 'react'
import GetProyectos from './GetProyectos'
import PostProyectos from './PostProyectos'
// import "bootstrap/dist/css/bootstrap.css"

const proyectosRouter = () => {
    return (
        <div className='contenedor__proyectos'>
            <PostProyectos />
            <GetProyectos />
        </div>
    )
}

export default proyectosRouter