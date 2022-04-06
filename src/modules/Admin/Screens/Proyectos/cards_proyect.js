import React from 'react'

const Card = (datos) => {
    console.log(datos)
return (
    <div className="card__wrapper">
        <div className="card__header">
            <img src={datos.proyectoImagen} alt="imagen" />
        </div>
        <div className="card__body_2">
            <div className="datos">
                {datos.proyectoCliente}
            </div>
            <div className="datos">
                {datos.proyectoFecha}
            </div>
            <div className="datos">
                {datos.proyectoName}
            </div>
        </div>
    </div>
)
}

export default Card