import React, { useContext, useState } from 'react'
import AuthContext from '../../../Context/auth/authContext'
import imgLog from "../../../Assets/01_LogoWebRGB_Mesa de trabajo 1.png"
import { login } from '../../../services/loginUsuAdmin/loginUsuAdmin'

const FormLogin = (props) => {
    const {setAuten, auten} = useContext(AuthContext)
    let formVacio = {
        usuario  : "",
        email    : "",
        password : ""
    }

    let [datosUsu, setDatosUsu] = useState(formVacio)

    const handleChange = (e) => {
        setDatosUsu({
            ...datosUsu,
            [e.target.name] : e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        // setAuten(true)
        login(datosUsu).then(
            data => {
                console.log(data)
                if(data.ok){
                    setDatosUsu(formVacio)
                    localStorage.setItem("Token", data.content)
                    console.log("entro")
                    setAuten(true)
                    props.history.push("/admin/dashboard")
                }else{
                    alert("Ingrese datos Correctamente")
                }
            }
        )
    }
    
    return (
        <div className='menu__form'>
            <div className="container__log_form">
                <div className="container__log">
                    <img src={imgLog} alt="LogoMobiliario" />
                </div>
                <div className="container__form">
                    <form onSubmit={submit}>
                        <h2 className="titulo"> Login Mobiliario</h2>
                        <input type="text" placeholder="Usuario" id="usuario" name="usuario" className='input__form_usuario' value={datosUsu.usuario} onChange={handleChange}/>
                        <input type="email" placeholder="Correo Electronico" id="email" className="input__form_correo" name="email" value={datosUsu.email}  onChange={handleChange}/>
                        <input type="password" placeholder="Contraseña" id="password" name="password" className='input__form_contrasena' value={datosUsu.password}  onChange={handleChange}/>
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
