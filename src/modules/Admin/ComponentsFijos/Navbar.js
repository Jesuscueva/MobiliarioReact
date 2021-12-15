import React from 'react'
import { Link } from 'react-router-dom'
import imgLog from "../../../Assets/02_MarcaMobiliario.jpg"

const Navbar = () => {
    return (
        <>

        <div className="container__navbar_dere">
            <div className="cabecera_logo">
                <img src={imgLog} alt="LogoMobiliario" />
            </div>
            <div className="container__options">
                <ul className="container__lists">
                    <li className="list__opt">
                        <Link className="link__list" to="/admin/Dashboard">Dashboard</Link> 
                    </li>
                    <li className="list__opt">
                        <Link className="link__list" to="/admin/Proyectos">Proyectos</Link> 
                    </li>
                    <li className="list__opt">
                        <Link className="link__list" to="/admin/Correos">Correos</Link> 
                    </li>
                    <li className="list__opt">
                        <Link className="link__list" to="/admin/---------">---------</Link> 
                    </li>
                </ul>
            </div>
            <div className="button__close_open">
            <i class="fas fa-chevron-left"></i>
            </div>
        </div>
        
        </>
    )
}

export default Navbar
