import React from 'react'
import img1 from '../../image/hp1.png'
import img2 from '../../image/hp2.png'
import img3 from '../../image/hp3.png'
import img4 from '../../image/hp4.png'
import img5 from '../../image/hp5.png'
import img6 from '../../image/hp6.png'

const OurFlavours = () => {
    const flavours = [
        {
            img: img1 ,
            name: 'ESPRESSO',
            des: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.'
        },
        {
            img:  img2 ,
            name: 'MACCHIATO',
            des: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.'
        },
        {
            img:  img3 ,
            name: 'RISTRETTO',
            des: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.'
        },
        {
            img: img4,
            name: 'CAPUCCINO',
            des: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.'
        },
        {
            img: img5 ,
            name: 'FRAPPE',
            des: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.'
        },
        {
            img: img6 ,
            name: 'IRISH',
            des: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.'
        },
    ]
    return (
        <div className='bg-black text-white lg:p-20 p-10'>
            <div className='text-center'>
                <h5 className='text-xl text-orange-300'>Choose one of our flavours</h5>
                <h3 className='text-4xl'>COFFEE BUILD YOUR BASE.</h3>
            </div>
            <div className='lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 text-center'>
                {
                    flavours.map(our => (
                        <div className='mx-auto'>
                            <img className='mx-auto' src={our.img} alt="" />
                            <h4 className='mt-5 mb-5 text-2xl'>{our.name}</h4>
                            <p className='text-xl text-orange-300'>{our.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OurFlavours