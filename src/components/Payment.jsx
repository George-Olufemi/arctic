import React from 'react'
import "./Payment.css"

const Payment = () => {
    return (
        <div className='bg-[#F8F9FC] w-[1440px] h-[830px]'>
            <div className='md:px-[250px] mb-[178.69px]'>
                <div className='flex pt-[75px] justify-between items-center'>
                    <a href="/">
                        <img src="/Nike.png" alt="Nikelogo" />
                    </a>
                    <a href="/">
                        <img src="/apple-pay-logo-svgrepo-com 1.png" alt="Nikelogo" />
                    </a>
                    <a href="/">
                        <img src="/silver-star-1-logo-svgrepo-com 1.png" alt="Nikelogo" />
                    </a>
                    <a href="/">
                        <img src="/intrax-logo-svgrepo-com 1.png" alt="Nikelogo" />
                    </a>
                    <a href="/">
                        <img src="/mastercard-2-logo-svgrepo-com 1.png" alt="Nikelogo" />
                    </a>
                </div>
            </div>

            <div className='mapp text-center'>
                <h1 className='not-italic font-[600px] text-[40px] leading-[135%] font-bold '>Creating the best <span className='text-[#3E86F5]'>ice-cold!</span> experience <br /> you would never forget.</h1>
                <p className='not-italic font-[400px] text-[24px] leading-[150%] text-[#A9A9A9] pt-[37px]'>Would you explore nature paradise in the world, find the <br /> best destination in the world with us.</p>
                <h1 className='not-italic font-[600px] text-[40px] leading-[60px] text-center pt-[158px] font-bold'>View Regions available</h1>

                {/* <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#3E86F5" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                </div> */}
            </div>
        </div>
    )
}

export default Payment