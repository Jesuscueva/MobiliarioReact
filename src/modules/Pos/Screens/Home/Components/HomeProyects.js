import React, { useEffect } from 'react'
import img1 from "../../../../../Assets/proyecto1.jpg"

const HomeProyects = () => {

    useEffect(() => {
            const d = document
            const $sectionThree = d.querySelector(".section__three"),
                    $efectoThree = d.querySelectorAll(".efecto_three"),
                    $efectoGallery = d.querySelector(".efecto_gallery"),
                    sectionThree = $sectionThree.offsetTop
                    d.addEventListener("scroll", e => {
                        const menuScroll = d.documentElement.scrollTop
                        if(sectionThree - 450 < menuScroll){
                            $efectoGallery.classList.add("anima")
                            $efectoThree.forEach(efect => {
                                efect.style.transition = "2s all"
                                efect.style.transform = "scale(1)"
                            })
                        }
                    })
                    
    }, [])

    return (
        <div>
                <section class="section__three">
                    <h2 class="section__three_titulo titulo__ efecto_three">
                        NUESTROS <strong>PROYECTOS</strong>
                    </h2>
                    <div class="container__gallery">
                        <div class="gallery efecto_gallery">
                            <div class="gallery__left direction">
                                <div class="figure one">
                                    <img src={img1} alt="IMAGEN GALERIA" />
                                    <a href="/mobiliario/oficina" class="btn-proyectos">Ver más <i class="fas fa-chevron-right"></i> </a>
                                </div>
                                <div class="figure ">
                                    <img src="" alt="IMAGEN GALERIA" />
                                    <a href="/mobiliario/educativo" class="btn-proyectos">Ver más <i class="fas fa-chevron-right"></i> </a>
                                </div>
                            </div>
                            <div class="gallery__rigth direction">
                                <div class="figure">
                                    <img src="" alt="IMAGEN GALERIA" />
                                    <a href="/proyectos/publicos" class="btn-proyectos">Ver más <i class="fas fa-chevron-right"></i> </a>
                                </div>
                                <div class="figure two">
                                    <img src="" alt="IMAGEN GALERIA" />
                                    <a href="/proyectos/privados" class="btn-proyectos">Ver más <i class="fas fa-chevron-right"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default HomeProyects
