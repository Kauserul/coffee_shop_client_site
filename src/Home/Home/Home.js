import React from 'react'
import Navbar from '../Navbar/Navbar'
import Bannar from '../Bannar/Bannar'
import CoffeeBuild from '../CoffeeBuild/CoffeeBuild'
import HomePageCoffeeList from '../HomePageCoffeeList/HomePageCoffeeList'

const Home = () => {
  return (
    <div>
        <Bannar></Bannar>
        <HomePageCoffeeList></HomePageCoffeeList>
        <CoffeeBuild></CoffeeBuild>
    </div>
  )
}

export default Home