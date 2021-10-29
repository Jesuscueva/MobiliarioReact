import React from 'react'
import Empresa from './InfoEmpresa/Empresa'
import Eventos from './InfoEmpresa/Eventos'

const HomeInfoEmpresa = () => {
    return (
        <section className="section__four">
            <Eventos />
            <Empresa />
        </section>
    )
}

export default HomeInfoEmpresa
