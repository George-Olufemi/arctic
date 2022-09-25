import React from 'react'
import './Home.css'
import HomeNav from '../navBar/HomeNav'
import BookTrip from '../components/BookTrip'
import Payment from '../components/Payment'

const Home = () => {
  return (
    <div className='bg w-screen h-[780px]'>
  <HomeNav/>
    <div className='md:px-[120px]'>
      <div className='justify-center items-center text-center text-white m-[137px]'>
        <h1 className='font-[700px] not-italic text-[56px] leading-[130px] font-bold '>Plan The Perfect Winter Trip</h1>
        <p className='font-[400px] not-italic text-[22px] leading-[155%]'>Easily plan your ideal ski trip from home with the <br /> help of professionals</p>
      </div>
    </div>
    <BookTrip/>
    <Payment/>
  </div>
  )
}

export default Home
