import React, { useEffect, useState } from 'react'
import './AllCoffeeList.css'
import AllCoffeeMenuList from './AlllCoffeeMenuList/AllCoffeeMenuList'

const AllCoffeeList = () => {
    const [allCoffee, setAllCoffee] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/allCoffeeLists')
        .then(res => res.json())
        .then(data => setAllCoffee(data))
    }, [])

    console.log(allCoffee)
  return (
    <div className=' bg-rose-100'>
        <div className='allProducts text-center text-white p-36'>
            <h2 className='font-bold text-4xl'>Our Menu</h2>
        </div>
        <div className='text-center pt-10'>
            <h3 className='text-4xl font-bold'>COFFEE MENU NO 1</h3>
        </div>
        <div className='lg:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 lg:p-20 p-10'>
            {
                allCoffee.length > 0 &&
                allCoffee.map(list => <AllCoffeeMenuList key={list._id} coffeeList={list}></AllCoffeeMenuList>)
            }
        </div>
    </div>
  )
}

export default AllCoffeeList