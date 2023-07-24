import React from 'react'

const Section5 = () => {
  return (
    <>
    <div className='mt-[60px]'>
    <img
        className=" img_responsive absolute left-[125px] w-[183.86px] h-[176.35px] overflow-hidden"
        alt=""
        src="/graphic-elements.svg"
      />
    </div>
    <section className=" responsive ml-[165px] mt-[120px] rounded-13xl bg-goldenrod-200 w-[1000px] flex flex-col py-32 px-16 box-border items-center justify-start gap-[64px] text-center">
        <div className="responsive1 flex flex-col items-start justify-start gap-[32px]">
          <b className="relative tracking-[0.2em] leading-[120%] uppercase inline-block w-[982px]">
            subscribe to our newsletter
          </b>
          <b className="text_responsive relative text-[50px] ml-8 mr-8 leading-[120%] inline-block text-black w-[982px]">Prepare yourself & let’s explore the beauty of the world</b>
        </div>
        <div className=" responsive2 self-stretch flex flex-row items-start justify-start gap-[64px] text-gray-400">
          <div className="self-stretch flex-1 rounded-13xl bg-white flex flex-row p-8 items-center justify-start gap-[16px]">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/message-1.svg"
            />
            <b className="relative leading-[120%]">Your Email</b>
          </div>
          <div className="self-stretch rounded-13xl bg-slateblue flex flex-row py-8 px-16 items-center justify-start text-white">
            <button className="relative leading-[120%]">Subscribe</button>
          </div>
        </div>
      </section>
      <div className='absolute overflow-hidden'>
        <img
        className="absolute overflow-hidden top-[2830px] left-[1280px] w-[332px] h-[351px] "
        alt=""
        src="/objects1.svg"
      />
        </div>
      </>
  )
}

export default Section5