

"use client"
import React, { useEffect, useState } from 'react';

const ServiceCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    {
      imageSrc: "/destination-1@2x.png",
      title: "Best Tour Guide",
      description: "What looked like a small patch of purple grass, above five feet.",
    },
    {
      imageSrc: "/booking-1@2x.png",
      title: "Easy Booking",
      description: "Square, was moving across the sand in their direction.",
    },
    {
      imageSrc: "/cloudy-1@2x.png",
      title: "Weather Forecast",
      description: "What looked like a small patch of purple grass, above five feet.",
    },
    {
        imageSrc: "/destination-1@2x.png",
        title: "Best Tour Guide",
        description: "What looked like a small patch of purple grass, above five feet.",
      },
      {
        imageSrc: "/booking-1@2x.png",
        title: "Easy Booking",
        description: "Square, was moving across the sand in their direction.",
      },
      {
        imageSrc: "/cloudy-1@2x.png",
        title: "Weather Forecast",
        description: "What looked like a small patch of purple grass, above five feet.",
      },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [cardData.length]);

  return (
    <div className="CARD1 relative w-[1050px] h-[440px] overflow-hidden">
      <div
        className="flex absolute transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 350}px)` }}
      >
        {cardData.map((data, index) => (
          <div
            key={index}
            className={`CHILDCARD self-stretch rounded-13xl bg-white ${
              index === currentIndex ? 'shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]' : ''
            } w-[350px] h-[440px] flex flex-col p-16 mr-4 box-border items-center justify-start gap-[64px]`}
          >
            <img className="relative w-16 h-16 object-cover" alt="" src={data.imageSrc} />
            <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
              <b className="self-stretch relative leading-[120%]">{data.title}</b>
              <div className="self-stretch relative text-lg leading-[160%] font-inter text-gray-300">
                {data.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
