import React, { useEffect, useState } from 'react'
import ProyectosCards from './ProyectosCards'

const ProyectosFiltrado = () => {
    const [filttro, setFiltro] = useState(0)
    const [active, setActive] = useState(false)
    // const [activeFiltroSelec, setActveFiltroSelec] = useState(false)
    const reinicio = () =>{
        setTimeout(() =>{
            setActive(true)
        }, 500)
        setActive(false)
    }
    const textSelec = (num) =>{
        const nodeList = document.querySelectorAll(".text_filtrado")
        const selecFiltro = Array.apply(null, nodeList)
        selecFiltro.forEach(fil => {
            fil.classList.remove("active")
        })
        const resl = selecFiltro.filter(sle => sle === selecFiltro[num])
        resl[0].classList.add("active")
    }
    const allCards = (e) => {
        textSelec(0)
        setFiltro(0)
        reinicio()
    } 
    const privateCards = () =>{
        textSelec(1)
        setFiltro(4)
        reinicio()
    }
    const publicCards = () =>{
        textSelec(2)
        setFiltro(5)
        reinicio()
    }
    const officeCards = () =>{
        textSelec(3)
        setFiltro(2)
        reinicio()
    }
    const educativeCards = () =>{
        textSelec(4)
        setFiltro(3)
        reinicio()
    }
    useEffect(()=>{
            setActive(true)
            textSelec(filttro)
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
            <ProyectosCards filtrado={filttro} active={active} key={filttro} />
        </>
    )
}

export default ProyectosFiltrado
