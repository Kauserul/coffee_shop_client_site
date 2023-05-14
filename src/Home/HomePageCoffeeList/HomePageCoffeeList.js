import React, { useEffect, useState } from 'react'
import CoffeeList from '../../CoffeeList/CoffeeList'
import './HomePageCoffeeList.css'
import { Link } from 'react-router-dom'

const HomePageCoffeeList = () => {
    const [homePageCoffeeList, setHomePageCoffeeList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/homePageCoffeeList')
            .then(res => res.json())
            .then(data => setHomePageCoffeeList(data))
    }, [])
    // console.log(homePageCoffeeList)
    return (
        <div className='coffeeList lg:p-20 p-10'>
            <div className='text-center mb-20'>
                <h4 className='text-xl text-orange-300'>What Happens Here</h4>
                <h3 className='text-4xl text-white'>FAVOURITE COFFEE FLAVOURS.</h3>
            </div>
            <div className='lg:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10'>
                {
                    homePageCoffeeList.length > 0 && 
                    homePageCoffeeList.map(coffeeList => <CoffeeList key={coffeeList._id} coffeeList={coffeeList}></CoffeeList>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to='/allCoffeeLists'><button className='btn bg-orange-300 text-black hover:bg-orange-500 border-none'>View Menu</button></Link>
            </div>
        </div>
    )
}

export default HomePageCoffeeList