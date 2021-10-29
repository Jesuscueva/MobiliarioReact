import React, { useEffect } from 'react'

const HomeSlider = () => {
    
    useEffect(() => {
        const $imgCarosuel = document.querySelectorAll(".img__carousel")
        console.log($imgCarosuel)
        $imgCarosuel.forEach( img => {
                    console.log(img)
                    img.classList.add("active")
        })
    })

    let i = 0
    const btnLeft = () => {

    }
    const btnRigth = () => {
        i++
        
    }

    return (
        <div>
            <section className="section__one section__primary">
                <div className="container_slider">
                    <div className="slide_section">
                        <div className="slider opacity">
                            <div className="img__carousel top">
                                <img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/slider__uno.jpg?alt=media&token=eb53e3f0-4a56-4d27-8634-fd3e91de41e4" alt="" />
                            </div>
                            <div className="img__carousel bottom ">
                                <img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/slider__dos.jpg?alt=media&token=94454782-a6cb-407b-b23b-73e98fdbc82a" alt="" />
                            </div>
                            <div className="img__carousel top">
                                <img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/slider__Tres.jpg?alt=media&token=ad64de12-91c1-4561-ac04-035891b98cc1" alt="" />
                            </div>
                        </div>
                        <div className="slider ">
                            <img src="./assets/slider__uno.jpg" alt="IMAGEN PRINCIPAL" />
                            <h3 className="text_slider">Text Prueba 2</h3>
                        </div>
                        <div className="slider ">
                            <img src="./assets/slider__dos.jpg" alt="IMAGEN PRINCIPAL" />
                            <h3 className="text_slider">Text Prueba 3</h3>
                        </div>
                    </div>
                    <div className="contenedor_btns">
                        <button className="btn" id="btn_left" onClick={btnLeft}>
                            <i className="fas fa-chevron-circle-left"></i>
                        </button>
                        <button className="btn" id="btn_rigth" onClick={btnRigth}>
                            <i className="fas fa-chevron-circle-right"></i>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeSlider
