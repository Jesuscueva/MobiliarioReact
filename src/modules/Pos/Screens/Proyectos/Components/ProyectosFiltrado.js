import React, { useEffect, useState } from 'react'
import ProyectosCards from './ProyectosCards'

const ProyectosFiltrado = () => {
    const [filttro, setFiltro] = useState(0)
    const [active, setActive] = useState(false)
    const reinicio = () =>{
        setTimeout(() =>{
            setActive(true)
        }, 500)
        setActive(false)
    }

    const allCards = () => {
        setFiltro(0)
        reinicio()
    } 

    const privateCards = () =>{
        setFiltro(1)
        reinicio()
    }

    const publicCards = () =>{
        setFiltro(2)
        reinicio()

    }

    const officeCards = () =>{
        setFiltro(3)
        reinicio()

    }

    const educativeCards = () =>{
        setFiltro(4)
        reinicio()

    }

    useEffect(()=>{
            setActive(true)
    },[])

    return (
        <>
            <div className="wrapper__filtrado">
                <div className="container_filtro">
                    <div className="text_filtrado" onClick={allCards}>
                        Todo
                    </div>
                    <div className="text_filtrado" onClick={privateCards}>Privados</div>
                    <div className="text_filtrado" onClick={publicCards}>Públicos</div>
                    <div className="text_filtrado" onClick={officeCards}>Oficina</div>
                    <div className="text_filtrado" onClick={educativeCards}>Educativo</div>
                </div>
            </div>
            <ProyectosCards filtrado={filttro} active={active} />
        </>
    )
}

export default ProyectosFiltrado
