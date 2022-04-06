import React, { useState } from 'react'
import { envioFormMobi } from '../../../../../services/datosMobiliario/conexionBD'

const ContactoForm = () => {
    
    const formVacio = {
        mensaMobiNom: "",
        mensaMobiMail: "",
        mensaMobiTel: "",
        mensaMobiEmpre: "",
        mensaMobiComentario: "",
    }
    const [formulario, setFormulario] = useState(formVacio)

    const handleChange = e =>{
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        })

    }
    const confimacionForm = () =>{
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
        }, 2500)
    }
    const envioForm = e =>{
        e.preventDefault()
        console.log(formulario)
        envioFormMobi(formulario).then(
            data => {
                console.log(data)
                if(data.success){
                    confimacionForm()
                }else(
                    alert("Error al Enviar")
                )
            }
        )
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
                        <input id="mensaMobiNom" className="input__contac" type="text" placeholder="Nombres y Apellidos" value={formulario.mensaMobiNom} onChange={handleChange} name="mensaMobiNom"/>
                    </div>
                    <div className="wrapper_icon_input">
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <input id="mensaMobiMail" className="input__contac" type="email" placeholder="Correo Electronico" required  value={formulario.mensaMobiMail} onChange={handleChange} name="mensaMobiMail"/>
                    </div>
                </div>
                
                <div className=" wrapper__input">
                    <div className="wrapper_icon_input">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <input id="mensaMobiTel" className="input__contac" type="number" value={formulario.mensaMobiTel} placeholder="Número de Celular"  onChange={handleChange} name="mensaMobiTel"/>
                    </div>
                    <div className="wrapper_icon_input">
                        <div className="icon">
                            <i className="fas fa-building"></i>
                        </div>
                        <input id="mensaMobiEmpre" className="input__contac" type="text" placeholder="Empresa"  onChange={handleChange} value={formulario.mensaMobiEmpre} name="mensaMobiEmpre"/>
                    </div>
                </div>
    
                <div className=" wrapper__input">
                    <div className="wrapper_icon_input">
                        <div className="icon">
                            <i className="fas fa-book"></i>
                        </div>
                        <input id="asunto" className="input__contac" type="text" placeholder="Asunto"   name="asunto"
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
                        <textarea value={formulario.mensaMobiComentario} name="mensaMobiComentario" id="mensaMobiComentario" cols="30" rows="10" placeholder="Dejanos tu comentario*" required onChange={handleChange}></textarea>
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
