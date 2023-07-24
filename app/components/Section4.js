import React from 'react'
import CountUp from 'react-countup';


const Section4 = () => {
  return (
    <section className=" section4  mr-[45px] mt-[100px] flex flex-row items-center justify-start gap-[42px]">
        <img
          className=" section4_img left-[-20px] relative w-[750px] h-[657px]"
          alt=""
          src="/group-9238.svg"
        />


        <div className=" section4_discount absolute mb-[366px] left-[470px] rounded-81xl bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] flex flex-row py-4 px-8 items-center justify-start gap-[16px] text-black">
        <img
          className=" discount_icon relative w-10 h-10 overflow-hidden"
          alt=""
          src="/discount-1.svg"
        />
        <b className=" discount_font relative text-[24px] leading-[120%]">Discounted Price</b>
      </div>


        <div className=" section4_text w-[445px] flex flex-col items-start justify-start gap-[64px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch text-[23px] text-hotpink relative tracking-[0.2em] leading-[120%] uppercase">
                Travel Point
              </b>
              <b className="self-stretch relative text-25xl leading-[120%] text-black">
                We helping you find your dream location
              </b>
            </div>
            <div className="self-stretch relative text-lg leading-[160%] font-inter text-gray-300">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </div>
          </div>


          <div className=" section4_starlogo absolute right-[40px] mt-[275px] rounded-81xl bg-goldenrod-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] flex flex-row p-8 items-center justify-start">
        <img
          className="relative w-12 h-12 overflow-hidden shrink-0"
          alt=""
          src="/ticketstar-1.svg"
        />
      </div>


          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-16xl text-orangered">
            <div className=" section4_box self-stretch flex flex-row items-start justify-start gap-[32px]">
            

              <div className=" box_dimension flex-1 rounded-13xl bg-white flex flex-col p-8 items-center justify-start gap-[16px] border-[1px] border-solid border-gray-200">
                <div>
                <CountUp end={500}/>
                <b>+</b>
                </div>
                <div className="relative text-[17px] leading-[160%] font-inter text-black">
                  Holiday Package
                </div>
              </div>


              <div className=" box_dimension flex-1 rounded-13xl bg-white flex flex-col p-8 items-center justify-start gap-[16px] border-[1px] border-solid border-gray-200">
                <CountUp end={100} />
                <div className="relative text-[17px] leading-[160%] font-inter text-black">
                  Luxury Hotel
                </div>
              </div>
            </div>
            <div className=" section4_box self-stretch flex flex-row items-start justify-start gap-[32px]">
              <div className=" box_dimension flex-1 rounded-13xl bg-white flex flex-col p-8 items-center justify-start gap-[16px] border-[1px] border-solid border-gray-200">
                <CountUp end={7} />
                <div className="relative text-[17px] leading-[160%] font-inter text-black">
                  Premium Airlines
                </div>
              </div>
              <div className=" box_dimension flex-1 rounded-13xl bg-white flex flex-col p-8 items-center justify-start gap-[16px] border-[1px] border-solid border-gray-200">
                <b className="relative leading-[120%]">2k+</b>
                <div className="relative text-[17px] leading-[160%] font-inter text-black">
                  Happy Customer
                </div>
              </div>
            </div>
          </div>
          
          
          
        </div>
        
      </section>
  )
}

export default Section4