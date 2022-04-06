import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import imgLog from "../../../Assets/02_MarcaMobiliario.jpg"
import AuthContext from '../../../Context/auth/authContext'

const Navbar = () => {

    const {setCambio} = useContext(AuthContext)
    const [openNav, setOpenNav] = useState(true)

    const click_ = () => {
        
        if(openNav){
            /**Navbar cerrado */
            setCambio(true)
            setOpenNav(false)
        }else{
            /**Navbar Abierto */
            setOpenNav(true)
            setCambio(false)
        }
    }
    return (
        <>

        <div className={openNav ? 'container__navbar_dere' : 'container__navbar_dere open'}>
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
            <div className="button__close_open" onClick={click_}>
            <i class="fas fa-chevron-left"></i>
            </div>
        </div>
        
        </>
    )
}

export default Navbar
