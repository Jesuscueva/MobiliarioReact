import React from 'react'
import HomeCards from './Components/HomeCards'
import HomeInfoEmpresa from './Components/HomeInfoEmpresa'
import HomeProyects from './Components/HomeProyects'
import HomeSlider from './Components/HomeSlider'

const HomeRouter = () => {
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

