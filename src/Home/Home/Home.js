import React from 'react'
import Navbar from '../Navbar/Navbar'
import Bannar from '../Bannar/Bannar'
import CoffeeBuild from '../CoffeeBuild/CoffeeBuild'
import HomePageCoffeeList from '../HomePageCoffeeList/HomePageCoffeeList'
import OurFlavours from '../OurFlavours/OurFlavours'

const Home = () => {
  return (
    <div>
        <Bannar></Bannar>
        <CoffeeBuild></CoffeeBuild>
        <HomePageCoffeeList></HomePageCoffeeList>
        <OurFlavours></OurFlavours>
    </div>
  )
}

export default Home