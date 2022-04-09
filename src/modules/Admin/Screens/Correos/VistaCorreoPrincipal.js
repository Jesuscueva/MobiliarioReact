import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect, useState} from 'react'
import "./VistaCorreoPrincipal.scss"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { getMensajes } from '../../../../services/datosMobiliario/conexionBD'

const VistaCorreoPrincipal = () => {
    
    const [mensajes, setMensajes] = useState([])
    const [error, setError] = useState(null)
    useEffect(e => {
        getMensajes().then(
            data => {
                // console.log(data)
                if(data.success){
                    setMensajes(data.content)
                }else{
                    setError(true)
                }
            }
        )
    }, [])

    const buscar = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <>
            <div className="wrapper__seccion_correos">
                <div className="contenedor__buscador">
                    <input type="text" name="" id=""  placeholder='Buscar...'/>
                    <div className="icon__buscador" onClick={buscar}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
                <div className="contenedor__mensajes">
                    <div className="fila__wrapper">
                        {/* MENSAJEE ..... */}
                        <br />
                        <table className='table__datos' >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Empresa</th>
                                    <th>Celular</th>
                                    <th>Asunto</th>
                                    <th>Más</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {/* <tr>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td className='wrapper__btn'>
                                            <div className="btn_table btn__delete">
                                                Eliminar
                                            </div>
                                            <div className="btn_table btn__comentario">
                                                Leer Comentario
                                            </div>
                                        </td>
                                    </tr> */}
                                    {
                                        !error ? 
                                            mensajes.map( dat => {
                                                return <tr>
                                                        <td>{dat.mensaMobiId}</td>
                                                        <td>{dat.mensaMobiNom}</td>
                                                        <td>{dat.mensaMobiEmpre}</td>
                                                        <td>{dat.mensaMobiTel}</td>
                                                        <td>Asunto</td>
                                                        <td className='wrapper__btn'>
                                                            <div className="btn_table btn__delete">
                                                                Eliminar
                                                            </div>
                                                            <div className="btn_table btn__comentario">
                                                                Leer Comentario
                                                            </div>
                                                        </td>
                                                    </tr>
                                            })
                                        : "error"
                                    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VistaCorreoPrincipal