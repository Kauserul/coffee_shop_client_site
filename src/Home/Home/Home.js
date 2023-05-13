import React from 'react'
import Navbar from '../Navbar/Navbar'
import Bannar from '../Bannar/Bannar'
import CoffeeBuild from '../CoffeeBuild/CoffeeBuild'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Bannar></Bannar>
        <CoffeeBuild></CoffeeBuild>
    </div>
  )
}

export default Home