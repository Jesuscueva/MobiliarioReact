import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { login } from '../../services/loginUsuAdmin/loginUsuAdmin'
import AuthContext from './authContext'

const AuthState = ({ children }) => {  

    const history = useHistory()
    const [auten, setAuten] = useState(false)
    const [auth, setAuth] = useState({
        autenticando:  false,
        usuario: "" ,
        token: null,
        cargando: true
    })

    const verificarTokenStorage = () => {
        const token =  localStorage.getItem()
        console.log(token)
    }

    useEffect(()=> {
        verificarTokenStorage()
    })

    return (
        <AuthContext.Provider value={{
            auten: auten,
            setAuten: setAuten,
            // datosUsu: datosUsu,
            // setDatosUsu: setDatosUsu,
        }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState
