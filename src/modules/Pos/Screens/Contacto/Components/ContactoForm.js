import React, { useState } from 'react'

const ContactoForm = () => {
    
    const formVacio = {
        nombre: "",
        correo: "",
        celular: "",
        empresa: "",
        asunto: "", 
        textarea: "",
    }
    const [formulario, setFormulario] = useState(formVacio)

    const handleChange = e =>{
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        })

    }
    const envioForm = e =>{
        e.preventDefault()
        // console.log(e.target.value)
        let topMessage = document.documentElement.scrollTop
        const message = document.getElementById("wrapper__message")
            message.style.display = "flex"
            message.style.transform = "scale(1)"
            message.style.opacity = "1"
            message.style.top = `${topMessage}px`
            message.style.left = "0"
        setTimeout(() =>{
            message.style.transform = "scale(0)"
            setFormulario(formVacio)
        }, 3500)
    }

    return (
        <div className="contenedor__form_">
            <div className="title">
                Formulario Contacto
            </div>
            <form onSubmit={envioForm} className="wrapper__form_contac" id="form-contacto">

                <div className=" wrapper__input">
                    <div className="wrapper_icon_input">
                        <div className="icon">
                            <i className="fas fa-user"></i>
                        </div>
                        <input id="nombre" className="input__contac" type="text" placeholder="Nombres y Apellidos" value={formulario.nombre} onChange={handleChange} name="nombre"/>
                    </div>
                    <div className="wrapper_icon_input">
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <input id="correo" className="input__contac" type="email" placeholder="Correo Electronico" required  value={formulario.correo} onChange={handleChange} name="correo"/>
                    </div>
                </div>
                
                <div className=" wrapper__input">
                    <div className="wrapper_icon_input">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <input id="celular" className="input__contac" type="number" value={formulario.celular} placeholder="Número de Celular"  onChange={handleChange} name="celular"/>
                    </div>
                    <div className="wrapper_icon_input">
                        <div className="icon">
                            <i className="fas fa-building"></i>
                        </div>
                        <input id="empresa" className="input__contac" type="text" placeholder="Empresa"  onChange={handleChange} value={formulario.empresa} name="empresa"/>
                    </div>
                </div>
    
                <div className=" wrapper__input">
                    <div className="wrapper_icon_input">
                        <div className="icon">
                            <i className="fas fa-book"></i>
                        </div>
                        <input id="asunto" className="input__contac" type="text" placeholder="Asunto"  onChange={handleChange} value={formulario.asunto} name="asunto"
                        />
                    </div>
                    <div className="wrapper_icon_input disabled">
                        
                    </div>
                </div>
    
                <div className=" wrapper__input textatera">
                    <div className="wrapper_icon_input ">
                        <div className="icon textarea">
                            <i className="fas fa-pencil-alt"></i>
                        </div>
                        <textarea value={formulario.textarea} name="textarea" id="textarea" cols="30" rows="10" placeholder="Dejanos tu comentario*" required onChange={handleChange}></textarea>
                    </div>
                </div>
                <button className="btn__form_contatc" type="submit"><i className="icono_enviar fas fa-paper-plane"></i> &nbsp; Enviar</button>
                
            </form>

            <div className="wrapper__message" id="wrapper__message">
                <div className="container__card">
                    <i className="far fa-check-circle"></i>
                    <h2>Formulario Enviado <br /> Correctamente !!</h2>
                    <p>En breve nos pondremos en contacto</p>
                </div>
            </div>
        </div>
    )
}

export default ContactoForm
