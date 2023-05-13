import React from 'react'
import './Bannar.css'

const Bannar = () => {

    return (
        <div>
            <div className='top_bannar text-white'>
                <h3 className='lg:text-6xl md:text-3xl text-xl font-bold'><span className='block'>A Place</span> of Tranquility</h3>
                <p className='lg:text-2xl md:text-xl text-sm mb-5 mt-4 w-2/4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae ducimus doloremque. </p>
                <button className='btn bg-white text-black hover:bg-orange-300 hover:text-white rounded-sm'>Read More</button>
            </div>
        </div>
    )
}

export default Bannar