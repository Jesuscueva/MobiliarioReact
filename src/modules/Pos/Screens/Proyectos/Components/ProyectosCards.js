import React, { useState, useEffect } from 'react'
import { getProyect } from '../../../../../services/datosMobiliario/conexionBD'

const ProyectosCards = ({filtrado, active}) => {
    let filtroCards = []
    const [info, setInfo] =useState([])
    useEffect( re => {
        getProyect().then(data => {
            if(data.success){
                setInfo(data.content)
            }else{
                alert("No hay datos a mostrar")
            }
        })
    }, [])

    if(filtrado === 0){
        filtroCards = info
    }else{
        filtroCards = info.filter(filt => filt.cat_id === filtrado)
    }
    
    return (
        <section className="wrapper__proyectos ">
            {
                filtroCards.map((e) => {
                return    <div className={active? "wrapper_individual-card active": "wrapper_individual-card"}>
                                <div className="card_proyecto">
                                    <div className="card__border"></div>
                                        <img src={e.proyectoImagen  } alt="ProyectosMobiliario" />
                                    <div className="overflow_card"></div>
                                    <div className="card__description">
                                        <div className="card__categoria">
                                            {e.categoria.categoriaNombre}
                                        </div>
                                        <div c  lassName="card__title">
                                            {e.proyectoName}
                                        </div>
                                        <div className="card__cliente">
                                            {e.proyectoCliente  }
                                        </div>
                                        <div className="card__fecha">
                                            {e.proyectoFecha}
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
