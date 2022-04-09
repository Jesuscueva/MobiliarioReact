const URL_BACK = "http://127.0.0.1:5150/"

export const envioFormMobi = async (objForm) => {
    const respon = await fetch(`${URL_BACK}enviandoFormMobiliario`, {
        method: "POST",
        headers: {
            "Content-type": "application/json" 
        },
        body: JSON.stringify(objForm)
    })
    const data = await respon.json()
    return data
}


export const getProyect = async () => {
    const respon = await fetch(`${URL_BACK}proyectos`)
    const data = await respon.json()
    return data
}


export const getMensajes = async () => {
    const respon  = await fetch(`${URL_BACK}mensajesMobiliario`)
    const data = await respon.json()
    return data
}