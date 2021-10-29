import React from 'react'
import imgEmpresa from "../../../../../../Assets/img_empresa.jpg"

const Empresa = () => {
    return (
        <article className="info_empresa">
            <h2 class="title_empresa titulo__  efecto__four">
            <strong>LA </strong> EMPRESA
            </h2>
            <figure class="container_img">
                <div class="capa_img">
                    <img src={imgEmpresa} alt="Imagen empresa" />
                    <div class="background_img"></div>
                </div>
                <p class="parrafo_empresa">Lorem ipsum Lorem ipsum dolor sit amet. dolor sit amet, consectetur adipiscing elit. Commodo, dignissim bibendum sit nisl tempor. Tempor risus, risus id coc.ommodo, dignissim bibendum sit nisl tempor. Tempor risus, risus id coc.</p>
            </figure>
        </article>
    )
}

export default Empresa
