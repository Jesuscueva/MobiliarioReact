import React from 'react'
import ContactoForm from './Components/ContactoForm'
import ContactoSlider from './Components/ContactoImgPresent'
import ContactoMaps from './Components/ContactoMaps'
import ContactoMensaje from './Components/ContactoMensaje'

const ContactoRouter = () => {
    return (
        <div>
            <ContactoSlider />
            <ContactoMensaje />
            <div className="wrapper__form_map">
                    <ContactoForm />
                    <ContactoMaps />
            </div>
        </div>
    )
}

export default ContactoRouter

