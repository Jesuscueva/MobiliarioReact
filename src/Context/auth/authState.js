import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import { useHistory } from 'react-router-dom'
import { login, verifyToken } from '../../services/loginUsuAdmin/loginUsuAdmin'
import AuthContext from './authContext'

const AuthState = ({ children }) => {  

const [auth, setAuth] = useState({
    autenticado: false,
    usuario: "" ,
    token: null,
    cargando:false,
    sesionOk: false
})

    const iniciarSesionContext = (token) => {
        localStorage.setItem("token", token)
        const payload = token.split(".")[1]
        const payloadDes = window.atob(payload)
        const payloadJson = JSON.parse(payloadDes)
        setAuth({
            autenticado: true,
            usuario: payloadJson.usuarioName,
            token: token,
            cargando: false,
            sesionOk: true
        })
        console.log("sesion iniciada", auth.sesionOk)
    }

    const cerrarSesion= (history) => {
        localStorage.removeItem("token")
        setAuth({
            autenticado: false,
            usuario: "",
            token: "",
            cargando: true,
            sesionOk: false
        })
        setTimeout(()=>{
            history.replace("/auth/login");
        }, 500)
        console.log("sesion cerrada", auth.sesionOk)
    }

    const verificarTokenStorage = () => {
        const token =  localStorage.getItem("token")
        console.log(token)
        if(token){
            console.log("Aun hay token")
            verifyToken(token).then( data => {
                if(data.ok){
                    console.log("hay token y sesion iniciada")
                    const payload = token.split(".")[1]
                    const payloadDesen = window.atob(payload)
                    const payloadJson = JSON.parse(payloadDesen)
                    console.log(payloadJson)
                    setAuth({
                        autenticado: true,
                        usuario: payloadJson.usuarioName,
                        token: token,
                        cargando: false,
                        sesionOk: true
                    })
                    console.log(auth.sesionOk)
                }else{
                    console.log("Sesion caducada")
                    localStorage.removeItem("token")
                    setAuth({
                        autenticado: false,
                        usuario: "",
                        token: "",
                        cargando: false,
                        sesionOk: false
                    })
                }
            }
            )
        }else{
            console.log("No hay token")
            setAuth({
                autenticado: false,
                usuario: "",
                token: "",
                cargando: false,
                sesionOk: false
            })
        }
    }

    useEffect(()=> {
        verificarTokenStorage()
    },[])

    return (
        <AuthContext.Provider value={{
            autenticado: auth.autenticado,
            usuario: auth.usuario,
            token: auth.token,
            cargando: auth.cargando,
            cerrarSesion: cerrarSesion,
            setAuth: setAuth,
            iniciarSesionContext: iniciarSesionContext,
            sesionOk: auth.sesionOk
        }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState
