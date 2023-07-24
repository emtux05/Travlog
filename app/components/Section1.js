"use client"
import React from 'react'

const Section1 = () => {
  return (
    <>
        <section className="flex flex-col md:flex-row max-w-6xl md:mx-[50px] ">
          <div className="w-full md:w-2/5 p-4 pt-[90px]">
            <div className="rounded-81xl bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] w-[220px] p-4 flex flex-row items-center justify-start gap-4">
                <b className=" text-hotpink text-[15px]">Explore the world!</b>
                <img
                  className="w-6 h-6 overflow-hidden"
                  alt=""
                  src="/work-1.svg"
                />
            </div>
        <b className=" section1_text relative mt-10 text-[69px] leading-[120%] inline-block w-[597px]">
            <p className="m-0">
              <span className="text-black">{`Travel `}</span>
              <span className='text-hotpink'>top destination</span>
              <span className="text-black">{` `}</span>
            </p>
            <p className="m-0 text-black">of the world</p>
          </b>
          <div className="relative mt-10 text-lg leading-[160%] font-inter text-gray-300">
            <p className="m-0">
              We always make our customer happy by providing
            </p>
            <p className="m-0">{`as many choices as possible `}</p>
          </div>
        <div className="flex flex-row mt-10 items-start justify-start gap-[16px] text-whitesmoke">
            <div className="rounded-81xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] bg-slateblue flex flex-row py-4 px-8 items-start justify-start text-whitesmoke">
                <button className="relative leading-[120%] text-[15px]">Get Started</button>
            </div>
            <div className="rounded-81xl bg-white flex flex-row py-4 px-8 items-center justify-start gap-[8px] text-gray-100 border-[1px] border-solid border-whitesmoke">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/playcircle5-1.svg"
              />
              <b className="relative leading-[120%] text-[15px]">Watch Demo</b>
            </div>
        </div>
          </div>

          <div className="w-full md:w-[310px] p-4 "> 
          <div className="relative w-[772px] h-[713px] mt-4 md:mt-0 text-darkslategray">
            <div className=' earth_img md:w-[310px]'>
          <img
            className="w-full h-auto md:absolute md:top-[0px] md:left-[0px]"
            alt=""
            src="/layer.svg"
            />
            </div>
          <div className=" section1_img absolute top-[75px] left-[91px] flex flex-row items-center justify-start gap-[31px]">
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <img
                className="relative rounded-13xl w-[272px] h-[300px] object-cover inset-0 transform  hover:scale-75 transition duration-300"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <img
                className="relative rounded-13xl w-[272px] h-[300px] object-cover inset-0 transform  hover:scale-75 transition duration-300"
                alt=""
                src="/rectangle-2@2x.png"
              />
            </div>
            <img
              className="relative rounded-13xl w-[272px] h-[400px] object-cover inset-0 transform  hover:scale-75 transition duration-300"
              alt=""
              src="/rectangle-3@2x.png"
            />
          </div>
          <div className="section1_icon1 absolute top-[341px] left-[56px] rounded-81xl bg-hotpink shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden flex flex-row p-4 items-start justify-start">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/send-1.svg"
            />
          </div>
          <div className="section1_icon2 absolute top-[649px] left-[474px] rounded-81xl bg-orangered shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden flex flex-row p-4 items-start justify-start">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/adduser-1.svg"
            />
          </div>
          <div className=" section1_icon3 absolute top-[488px] left-[592px] rounded-81xl bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden flex flex-row py-4 px-8 items-center justify-start gap-[8px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/location-1.svg"
            />
            <b className="relative leading-[120%] text-[15px]">Top Places</b>
          </div>
        </div>
          </div>
        </section>
    </>
  )
}

export default Section1