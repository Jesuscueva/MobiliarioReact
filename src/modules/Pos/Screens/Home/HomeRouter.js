import React, { useEffect } from 'react'
import HomeCards from './Components/HomeCards'
import HomeInfoEmpresa from './Components/HomeInfoEmpresa'
import HomeProyects from './Components/HomeProyects'
import HomeSlider from './Components/HomeSlider'

const HomeRouter = () => {
    useEffect(()=>{
        var d = document
        let $sectionTwo = d.querySelector(".section__two"),
            $sectionThree = d.querySelector(".section__three"),
            $sectionFour = d.querySelector(".section__four")
        
            const $efecto = d.querySelectorAll(".efecto"),
            $efectoThree = d.querySelectorAll(".efecto_three"),
            $efectoGallery = d.querySelector(".efecto_gallery"),
            $efectoFour = d.querySelectorAll(".efecto__four")
            document.addEventListener("scroll", e => {
                const menuScroll = document.documentElement.scrollTop
                const sectionTwo = $sectionTwo.offsetTop,
                sectionThree = $sectionThree.offsetTop,
                sectionFour = $sectionFour.offsetTop

                if(sectionTwo - 450  < menuScroll){
                    $efecto.forEach(efec => {
                        efec.classList.add("anima")
                    })
                }
                if(sectionThree - 450 < menuScroll){
                    $efectoGallery.classList.add("anima")
                    $efectoThree.forEach(efect => {
                        efect.style.transition = "2s all"
                        efect.style.transform = "scale(1)"
                    })
                }
                if(sectionFour - 450 < menuScroll){
                    $efectoFour.forEach(four => {
                        four.style.transition = "2s all"
                        four.style.transform = "scale(1)"
                    })
                }
        })
    },[])
    return (
        <div>
            <HomeSlider />
            <HomeCards />
            <HomeProyects />
            <HomeInfoEmpresa />
        </div>
    )
}

export default HomeRouter

