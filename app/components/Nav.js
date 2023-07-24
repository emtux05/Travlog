import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between mx-4 md:ml-[120px] md:mr-[120px] md:mt-[30px] mt-5 text-sm text-black">
      <div className="flex flex-row items-center justify-start gap-[16px] text-5xl">
        <img className="relative w-10 h-10" alt="" src="/vector.svg" />
        <p className="logo_text text-base md:text-xl">Travlog</p>
      </div>
      {/* Mobile menu button */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={handleMenuToggle}
          className="text-gray-300 text-4xl focus:outline-none"
        >
          &#9776;
        </button>
      </div>
      {/* Desktop menu */}
      <div className="hidden sm:flex flex-row items-center justify-start gap-[150px] text-gray-300">
        <div className='flex gap-[64px]'>
        <b className="relative leading-[120%] text-gray-100">Home</b>
        <b className="relative leading-[120%]">Discover</b>
        <b className="relative leading-[120%]">Special Deals</b>
        <b className="relative leading-[120%]">Contact</b>
        </div>
        <div className="flex flex-row items-start justify-start text-gray-100 ml-auto">
          <div className="rounded-81xl bg-white flex flex-row py-4 px-8 items-start justify-start">
            <button className="relative leading-[120%]">Log In</button>
          </div>
          <div className="rounded-81xl bg-slateblue flex flex-row py-4 px-8 items-start justify-start text-whitesmoke">
            <button className="relative leading-[120%]">Sign Up</button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-[60px] left-0 right-0 bg-white border-b border-solid border-gray-200 z-10">
          <div className="flex flex-col items-center gap-4 p-4">
            <b className="relative leading-[120%] text-gray-100">Home</b>
            <b className="relative leading-[120%] text-gray-100">Discover</b>
            <b className="relative leading-[120%] text-gray-100">Special Deals</b>
            <b className="relative leading-[120%] text-gray-100">Contact</b>
            <div className="rounded-81xl bg-white flex flex-row py-4 px-8 items-start justify-start">
              <button className="relative leading-[120%]">Log In</button>
            </div>
            <div className="rounded-81xl bg-slateblue flex flex-row py-4 px-8 items-start justify-start text-whitesmoke">
              <button className="relative leading-[120%]">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
