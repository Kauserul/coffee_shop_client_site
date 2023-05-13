import React from 'react'
import img1 from '../../image/img-1.png'
import img2 from '../../image/img-2.png'
import img3 from '../../image/img-3.png'

const CoffeeBuild = () => {
    return (
        <div className='bg-black text-white pt-20 pb-20'>
            <div className='text-center'>
                <h5 className='text-xl text-orange-300'>What Happens Here</h5>
                <h3 className='text-4xl'>COFFEE BUILD YOUR BASE.</h3>
            </div>
            <div className='lg:flex lg:gap-10 lg:p-20 md:flex p-10'>
                <div>
                    <img src={img1} alt="" />
                    <h3 className='text-2xl font-bold mt-3 mb-3'>PLACES TO GET LOST</h3>
                    <p className='mb-4'>Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.</p>
                    <p className='text-orange-300'>Read More</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <h3 className='text-2xl font-bold mt-3 mb-3'>BEST COFFEE FLAVORS</h3>
                    <p className='mb-4'>Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.</p>
                    <p className='text-orange-300'>Read More</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <h3 className='text-2xl font-bold mt-3 mb-3'>MAKE IT SIMPLE</h3>
                    <p className='mb-4'>Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.</p>
                    <p className='text-orange-300'>Read More</p>
                </div>
            </div>
        </div>
    )
}

export default CoffeeBuild