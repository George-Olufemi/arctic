import React from 'react'
import { Link } from 'react-router-dom'

const HomeNav = () => {
  return (
    <nav className='h-[90px] md:h-[100px] text-white'>
      <div className='md:px-[120px]'>
        <div className='h-[100px] flex justify-between items-center'>

          <div className='flex justify-between items-center'>
            <img className='w-[40px] h-[40px]' src="/logo.png" alt="" />
            <h1 className='ml-5 font-bold font-[700px] text-[20px] leading-[30px] not-italic'>Arctic Travels</h1>
          </div>

          <div>
            <ul className='hidden md:flex justify-between gap-[40px] cursor-pointer not-italic'>
              <Link to="/"><li> Home</li></Link>
              <Link to="/about"><li>About Us</li></Link>
              <Link to="/support"><li>Support Us</li></Link>
              <Link to="/faq"><li>FAQ</li></Link>
            </ul>
          </div>

          <div>
            <button className='bg-white rounded-[10px] text-[#3E86F5] w-[151px] h-[48px] font-bold font-[600px] text-[20px] leading-[21px] not-italic'>Sign In</button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default HomeNav