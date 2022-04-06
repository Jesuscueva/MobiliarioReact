import React, {useEffect, useState} from 'react'
import { getProyect } from '../../../../services/datosMobiliario/conexionBD'
import Card from './cards_proyect'
import "./GerProyectos.scss"

const GetProyectos = () => {

    const [datos, setDatos] = useState([])
    useEffect(()=>{
        getProyect().then(
            data => {
                console.log(data)
                if(data.success){
                    setDatos(data.content)
                }else{
                    alert("no hay")
                }
            }
        )
    },[])
    console.log(datos);
    return (
        <div className='wrapper__get_proyectos'>
            <h2 className='titulo__contenedor'>Proyectos Agregados</h2>
            {/* Colocar cards */}
            <div className="wrapper__cards_pro">
            {
                datos.map(data => {
                    return <div className="card__wrapper">
                        <div className="card__header">
                            <img src={data.proyectoImagen} alt="imagen" />
                        </div>
                        <div className="card__body_2">
                            <div className="datos">
                                {data.proyectoCliente}
                            </div>
                            <div className="datos">
                                {data.proyectoFecha}
                            </div>
                            <div className="datos">
                                {data.proyectoName}
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    )
}

export default GetProyectos