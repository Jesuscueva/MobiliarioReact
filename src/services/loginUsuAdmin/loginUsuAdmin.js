const URL_BACK = "http://127.0.0.1:5150/"

export const login = async (obj_form) => {
    const res = await fetch(`${URL_BACK}loginUsuario`,{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        } ,
        body: JSON.stringify(obj_form)
    })
    const data = await res.json()
    return data
}

export const verifyToken = async (token) => {
    const res = await fetch(`${URL_BACK}verificar`,{
        method: "POST",
        headers: {
            // "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    })
    const data = await res.json()
    return data
}