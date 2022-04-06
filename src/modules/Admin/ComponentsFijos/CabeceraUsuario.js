import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../../Context/auth/authContext'

const CabeceraUsuario = () => {

    const {cerrarSesion, usuario} = useContext(AuthContext)
    const history = useHistory()
    // console.log(usuario);
    return (
        <div className="contenedor__cabecera_usu">
            <div className="wrapper__contenido">
                <div className="contenedor__imag">
                    <div className="contenedor__text">
                        Bienvenid@
                    </div>
                    <div className="contenedor__usu">
                        {usuario}
                    </div>
                    <div className="button__close" onClick={()=>{
                            cerrarSesion(history)
                    }}>
                        Salir <i class="fas fa-sign-in-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CabeceraUsuario
