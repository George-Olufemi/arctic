import React from 'react'
import Wobble from 'react-reveal'
import Fade from 'react-reveal'

const FooterHero = () => {
    return (
        <Fade big>
            <React.Fragment>
                <div className=' md:relative'>
                    <div className='bg-[url("https://thumbs.dreamstime.com/b/adult-female-age-20-25-snowboarder-6544182.jpg")] h-[720px] bg-cover bg-center mt-[138px]'>
                        <Fade big>
                            <h1 className='not-italic font-[600px] text-8xl leading-[108px] text-white font-bold text-left ml-[120px] pt-[152px]'>View Passes We’ve Made <br /> Available For You</h1>
                        </Fade>

                        <Wobble>
                            <button className='w-[258px] h-[72px] bg-[#3E86F5] rounded-[10px] mt-[71px] ml-[120px] hover:bg-blue-400 '>
                                <h1 className='not-italic font-[600px] text-[16px] leading-[24px] text-white'>View Passes</h1>
                            </button>
                        </Wobble>
                    </div>
                </div>
            </React.Fragment>
        </Fade>
    )
}

export default FooterHero