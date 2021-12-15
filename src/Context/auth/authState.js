import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import AuthContext from './authContext'

const AuthState = ({ children }) => {  
    const history = useHistory()
    const [auten, setAuten] = useState(true)
    useEffect(()=>{
        setAuten(true)
        
    },[])

    return (
        <AuthContext.Provider value={{
            autentic: auten,
            setAuten: setAuten
        }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState
