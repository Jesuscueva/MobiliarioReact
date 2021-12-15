import React, { useContext } from 'react'
import AuthContext from '../../../Context/auth/authContext'
import imgLog from "../../../Assets/01_LogoWebRGB_Mesa de trabajo 1.png"

const FormLogin = (props) => {
    const {setAuten, autentic} = useContext(AuthContext)
    const envio = (e) => {
        e.preventDefault()
        setAuten(true)
        props.history.push("/admin/dashboard")
    }
    
    return (
        <div className='menu__form'>
            <div className="container__log_form">
                <div className="container__log">
                    <img src={imgLog} alt="LogoMobiliario" />
                </div>
                <div className="container__form">
                    <form onSubmit={envio}>
                        <h2 className="titulo"> Login Mobiliario</h2>
                        <input type="text" placeholder="Usuario" id="usuario_mobiliario_2022" name="usuario_mobiliario_2022" className='input__form_usuario'/>
                        <input type="email" placeholder="Correo Electronico" id="correo_mobiliario_2022" className="input__form_correo" name="correo_mobiliario_2022" />
                        <input type="password" placeholder="Contraseña" id="contraseña_mobiliario_2022" name="contraseña_mobiliario_2022" className='input__form_contrasena'/>
                        <button className="button__form">
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormLogin
