import React from 'react'

const AllCoffeeMenuList = ({coffeeList}) => {
    const {img, name, des, price} = coffeeList
    return (
        <div className='lg:flex justify-between'>
            <div>
                <img className=' w-3/5 pl-0 ml-0' src={img} alt="" />
            </div>
            <div>
                <h3 className='text-black text-2xl font-bold'>{name}</h3>
                <p className='text-black text-xl'>{des}</p>
            </div>
            <div>
                <h5 className='text-black text-3xl mb-2'>{price}</h5>
                <button className='btn btn-sm bg-white text-black hover:bg-orange-600 border-none'>Order</button>
            </div>
        </div>
    )
}

export default AllCoffeeMenuList