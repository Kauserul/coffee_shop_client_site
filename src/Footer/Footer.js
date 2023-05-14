import React from 'react'
import './Footer.css'
import MainFooter from './MainFooter'

const Footer = () => {
    const openingHour = [
        {
            day: "MONDAY",
            time: "close"
        },
        {
            day: "TUESDAY",
            time: "9:00 - 22:00"
        },
        {
            day: "WEDNESDAY",
            time: "9:00 - 22:00"
        },
        {
            day: "THURSDAY",
            time: "9:00 - 22:00"
        },
        {
            day: "FRIDAY *",
            time: "9:00 - 1:00"
        },
        {
            day: "SATURDAY",
            time: "12:00 - 01:00"
        },
        {
            day: "SUNDAY",
            time: "9:00 - 22:00"
        },
    ]

    const latesPost = [
        {
            title: "EXPAND YOUR MIND",
            date: "14.02.2017"
        },
        {
            title: "PLACES TO GET LOST",
            date: "14.02.2017"
        },
        {
            title: "LEWIS HOWES",
            date: "14.02.2017"
        },
        {
            title: "ELEVATE YOUR EXPECTATIONS",
            date: "14.02.2017"
        },
    ]
    return (
        <div>
            <div className='footerbg text-white lg:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-20 lg:p-20 p-10'>
                <div>
                    <h3 className='text-3xl mb-4'>OPENING HOURS</h3>
                    {
                        openingHour.map(open => (
                            <div className='flex justify-between'>
                                <h2 className='text-xl mb-2'>{open.day}</h2>
                                <p className='text-xl'>{open.time}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <h3 className='text-3xl mb-4'>LATEST POSTS</h3>
                    {
                        latesPost.map(post => (
                            <div>
                                <h2 className='text-xl'>{post.title}</h2>
                                <p className='mb-2'>{post.date}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <h3 className='text-3xl mb-4'>CONTACT US</h3>
                    <p className='text-xl mb-2'>kausarulislam0055@gmail.com</p>
                    <p className='text-xl mb-2'>1-444-123-4559</p>
                    <p className='text-xl mb-2'>Raymond Boulevard 224,</p>
                    <p className='text-xl mb-2'>New York</p>
                </div>
                <div>
                    <h3 className='text-3xl mb-4'>OTHER LOCATIONS</h3>
                    <p className='text-xl mb-2'>BARISTA COFFEE SHOP</p>
                    <p className='text-xl mb-2'>2606 Saints Alley</p>
                    <p className='text-xl mb-2'>Tampa, FL 33602</p>
                </div>
            </div>
            <MainFooter></MainFooter>
        </div>
    )
}

export default Footer