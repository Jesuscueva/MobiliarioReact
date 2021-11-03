import React, { useState } from 'react'

const ProyectosCards = ({filtrado, active}) => {
    console.log(filtrado)
    const ProyectosTotal = [
        {
            categoria : "Educativo",
            categoriaId : 4,
            title : "Escritorio de Marmol",
            img: "https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/escritorio.jpg?alt=media&token=57b520a4-9b32-4e6e-8d4d-39bb53e77fd2",
            cliente: "Empresa SAC",
            fecha: "20 de enero 2020"
        },
        {
            categoria : "Oficina",
            categoriaId: 3,
            title : "Mesa de Reuniones",
            img: "https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/sillas.jpg?alt=media&token=a2043e00-28a3-47c9-ac24-2577d086a9e1",
            cliente: "Empresa SAC",
            fecha: "20 de enero 2020"
        },
        {
            categoria : "Oficina",
            categoriaId: 3,
            title : "Sillas de oficina",
            img: "https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/escritorio2.jpg?alt=media&token=f50f17e2-5b27-4d8c-9272-7b2859cf4424",
            cliente: "Empresa SAC",
            fecha: "20 de enero 2020"
        },
        {
            categoria : "Públicos",
            categoriaId: 2,
            title : "Sillas para Colegio",
            img: "https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/sillas.jpg?alt=media&token=a2043e00-28a3-47c9-ac24-2577d086a9e1",
            cliente: "Empresa SAC",
            fecha: "20 de enero 2020"
        },
        {
            categoria : "Privados",
            categoriaId: 1,
            title : "Mesa de Reuniones",
            img: "https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/salaReunion.jpg?alt=media&token=05cfdfcd-86eb-4e93-916b-77b1e6d8969d",
            cliente: "Ejecuta",
            fecha: "20 de enero 2020"
        }
    ]
    let filtroCards = []

    if(filtrado === 0){
        filtroCards = ProyectosTotal
    }else{
        filtroCards = ProyectosTotal.filter(filt => filt.categoriaId === filtrado)
    }
    
    return (
        <section className="wrapper__proyectos ">
            {
                filtroCards.map((e) => {
                return    <div className={active? "wrapper_individual-card active": "wrapper_individual-card"}>
                                <div className="card_proyecto">
                                    <div className="card__border"></div>
                                        <img src={e.img} alt="ProyectosMobiliario" />
                                    <div className="overflow_card"></div>
                                    <div className="card__description">
                                        <div className="card__categoria">
                                            {e.categoria}
                                        </div>
                                        <div className="card__title">
                                            {e.title}
                                        </div>
                                        <div className="card__cliente">
                                            {e.cliente}
                                        </div>
                                        <div className="card__fecha">
                                            {e.fecha}
                                        </div>
                                    </div>
                                </div>
                    </div>
                    

                })
            }
        </section>
    )
}

export default ProyectosCards
