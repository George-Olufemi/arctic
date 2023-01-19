import React from "react";

const Footer = () => {
  return (
    <div className="h-[500px] mt-[80px] bg-white md:px-[180px] flex justify-between">
      <div>
        <div>
          <img className="mb-[20px]" src="/Group 44.png" alt="" />
        </div>

        <div>
          <h1 className="not-italics font-bold text-[30px] leading-[30px] mb-[16px]">
            Artic Travels
          </h1>
          <p className="not-italics font-[500px] text-[13px] leading-[170%] text-[#00000070] mb-[32px]">
            Book your trip in minutes, get full <br /> control for much longer.
          </p>
        </div>

        <div className="flex mb-[118px] gap-[25.42px]">
          <img src="/Social.png" alt="" />
          <img src="/Social (1).png" alt="" />
          <img src="/Social (2).png" alt="" />
        </div>

        <h1 className="not-italics font-[500px] text-[17px] leading-[209%] text-[#00000080]">
          © 2022 Arctic Travels - All right reserved.
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-[126px]">
        <div>
          <h1 className="not-italics font-semibold text-[20px] leading-[21px] text-[#3E86F5] mb-[40px]">
            Company
          </h1>

          <div className="not-italics font-[400px] text-[15px] leading-[21px] text-[#031530] mb-[175px]">
            <p className="mb-[20px]">About</p>
            <p className="mb-[20px]">Careers</p>
            <p className="mb-[20px]">Mobile</p>
          </div>

          <h1 className="not-italics font-[500px] text-[17px] leading-[209%] text-[#00000080]">Privacy Policy</h1>
        </div>
        <div>
          <h1 className="not-italics font-semibold  text-[20px] leading-[21px] text-[#3E86F5] mb-[40px]">
            Contact
          </h1>
          <div className="not-italics font-[400px] text-[15px] leading-[21px] text-[#031530] mb-[175px]">
            <p className="mb-[20px]">FAQ</p>
            <p className="mb-[20px]">Press</p>
            <p className="mb-[20px]">Affiliates</p>
          </div>

          <h1 className="not-italics font-[500px] text-[17px] leading-[209%] text-[#00000080]">Terms of Use</h1>
        </div>
        <div>
          <h1 className="not-italics font-semibold  text-[20px] leading-[21px] text-[#3E86F5] mb-[40px]">
            More
          </h1>
          <div className="not-italics font-[400px] text-[15px] leading-[21px] text-[#031530]">
            <p className="mb-[20px]">Airlines</p>
            <p className="mb-[20px]">Airfees</p>
            <p className="mb-[20px]">Lowfare Tips</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
