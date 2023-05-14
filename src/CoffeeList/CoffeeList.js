import React from 'react'

const CoffeeList = ({coffeeList}) => {
    const {des, img, name, price} = coffeeList
    // console.log(coffeeList)
  return (
    <div className='lg:flex justify-between'>
        <div>
            <img className=' w-3/5' src={img} alt="" />
        </div>
        <div>
            <h3 className='text-white text-2xl font-bold'>{name}</h3>
            <p className='text-orange-300 text-xl'>{des}</p>
        </div>
        <div>
            <h5 className='text-white text-3xl mb-2'>{price}</h5>
            <button className='btn btn-sm bg-white text-black hover:bg-orange-600'>Order</button>
        </div>
    </div>
  )
}

export default CoffeeList