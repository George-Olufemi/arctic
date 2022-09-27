import React from 'react';
import Slide from 'react-reveal/Slide';


function Resort() {
    return (
        <React.Fragment>
            <Slide left>
                <div className="ml-12 text-2xl md:text-5xl font-semibold md:bold mb-10">
                    <h1 className='not-italic font-[600px] text-[48px] leading-[135%] font-bold pt-5'>The best resorts to chill<br /> and relax</h1>
                </div>
            </Slide>
            <div ClassName="md:flex">
                <div className="">
                    <div className="md:relative md:left-96 md:ml-96 md:h-full md:w-1/3 px-5">
                        <Slide right>
                            <img className="rounded-2xl mb-5" src="https://img.freepik.com/free-photo/nature-paradise-landscape-caribbean-maldives_1203-5348.jpg?w=2000" alt="Resort Place" />
                        </Slide>
                        <Slide right>
                            <img className="rounded-2xl mb-5" src="https://img.freepik.com/free-photo/beautiful-winter-landscape-with-chalet_23-2148931133.jpg?w=2000" alt="Resort Place" />
                        </Slide>
                    </div>
                </div>
                {/* second part to be flexed */}
                <div className="">
                    <div className="md:relative md:-top-96 md:ml-64 md:h-full md:w-1/3 px-5">
                        <Slide left>
                            <img className="rounded-2xl mb-5" src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/05/shutterstock-130167065-kw-220517-A-couple-on-a-jetty-in-front-of-the-overwater-properties-on-an-island-resort-in-Maldives.jpg" alt="Resort Place" />
                        </Slide>
                        <Slide left>
                            <img className="rounded-2xl mb-5" src="https://img.freepik.com/free-photo/skier-riding-downhill-mountain-resort_181624-39736.jpg" alt="Resort Place" />
                        </Slide>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Resort;