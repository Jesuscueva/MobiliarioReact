import React from 'react'

const NosotrosSlides = () => {
    const d = document

    const cambios = (uno, dos, tres) => {
        let $wrapperImg = d.querySelectorAll(".wrapper_img_descrip_"),
            $subTitulo = d.querySelectorAll(".sub_titulo")

            $subTitulo[uno].classList.add("selec")
            $subTitulo[dos].classList.remove("selec")
            $subTitulo[tres].classList.remove("selec")
            $wrapperImg[uno].classList.add("selec")
            $wrapperImg[dos].classList.remove("selec")
            $wrapperImg[tres].classList.remove("selec")
    }

    const mision = () => {
            cambios(0, 1, 2)
    }

    const vision = () => {
            cambios(1, 0, 2)
    }

    const valores = () => {
            cambios(2, 0, 1)
    }


    return (
        
        <div class="wrapper_info">

            <div class="container_nosotros_info">
                <div class="container__titulos">
                    <div class="sub_titulo selec mision"  onClick={mision}>
                        
                            MISIÓN
                        
                    </div>
                    <div class="border"></div>
                    <div class="sub_titulo vision " onClick={vision}>
                        
                            VISIÓN
                        
                    </div>
                    <div class="border"></div>
                    <div class="sub_titulo valores" onClick={valores}>
                        
                            VALORES
                        
                    </div>
                </div>
                <div class="container_img_descrip">
                    <div class="wrapper_img_descrip_ selec">
                        <div class="container__img">
                            <img src="./assets/mision2_Mesa de trabajo 1.png" alt="Misión" />
                        </div>
                        <div class="container__descrip">
                            <p class="descripcion_nosotros ">
                                Inspirados por los avances ---, guiados por nuestros valores y con la nutrición en el centro, trabajamos conjuntamente con nuestros colaboradores para mejorar la calidad de vida y contribuir a un futuro más saludable, para personas y familias, para nuestras comunidades y para el planeta.
                            </p>
                        </div>
                    </div>
                    <div class="wrapper_img_descrip_">
                        <div class="container__img">
                            <img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/vision2-02.png?alt=media&token=7d4356e1-6c56-44fe-8b72-6b7a553fdfa0" alt="Visión" />
                        </div>
                        <div class="container__descrip">
                            <p class="descripcion_nosotros ">
                                Como empresa líder , los esfuerzos de la compañía se orientan a estar siempre a la vanguardia s.

                                A partir de esa premisa, el objetivo es cumplir con las exigencias de una sociedad que avanza hacia una vida más saludable, creando valor a largo plazo para nuestros accionistas, colaboradores, consumidores y las sociedades donde operamos.
                            </p>
                        </div>
                    </div>
                    <div class="wrapper_img_descrip_">
                        <div class="container__img">
                            <img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/Valores-03-03.png?alt=media&token=0a0a86a4-a326-4f6d-9047-9951dedc221f" alt="Valores" />
                        </div>
                        <div class="container__descrip">
                            <p class="descripcion_nosotros ">
                                Valores empresa líder , los esfuerzos de la compañía se orientan a estar siempre a la vanguardia s.

                                A partir de esa premisa, el objetivo es cumplir con las exigencias de una sociedad que avanza hacia una vida más saludable, creando valor a largo plazo para nuestros accionistas, colaboradores, consumidores y las sociedades donde operamos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NosotrosSlides
