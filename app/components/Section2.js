"use client"
import React from 'react';

const Section2 = () => {
  return (
    <section className="section2 flex flex-col md:flex-row mt-4 w-full">
      <div className="left-[10px] w-full flex flex-col md:flex-row py-6 md:py-16 px-2 md:px-[165px] box-border items-center md:justify-between md:gap-4 overflow-x-auto md:overflow-visible">
        <div className="flex flex-row justify-between w-full md:w-auto">
          <img className="relative w-[132.28px] md:w-[264.56px] h-8" alt="" src="/1.svg" />
          <img className="relative w-[70.59px] md:w-[141.18px] h-8" alt="" src="/2.svg" />
        </div>
        <div className="flex flex-row justify-between w-full md:w-auto mt-2 md:mt-0">
          <img className="relative w-[117.92px] md:w-[235.84px] h-8" alt="" src="/3.svg" />
          <img className="relative w-[63.93px] md:w-[127.86px] h-8" alt="" src="/4.svg" />
        </div>
        <div className="flex justify-center w-full md:w-auto mt-2 ml-4 md:mt-0">
          <img className="relative w-[117.92px] h-8" alt="" src="/5.svg" />
        </div>
      </div>
      <img
        className=" section2_object absolute left-2 md:left-[38px] w-[40px] md:w-[65px] mt-[-55px] overflow-hidden"
        alt=""
        src="/objects.svg"
      />
    </section>
  );
};

export default Section2;



