"use client"
import React from 'react';
import ServiceCard from './ServiceCard';

const Section3 = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-6xl mx-auto md:mx-20">
      <div className="w-full md:w-2/5 p-4 flex flex-col items-start justify-center text-left">
        <b className="relative tracking-[0.2em] leading-[120%] uppercase text-hotpink text-[25px]">
          Services
        </b>
        <b className="self-stretch mt-2 relative text-25xl leading-[120%] text-black">
          Our top value categories for you
        </b>
      </div>
      <div className="w-full md:w-3/5 p-4">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start gap-[21px] text-center md:text-left text-9xl text-black">
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Section3;
