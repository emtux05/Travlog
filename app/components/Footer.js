import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="container px-14 py-12 mx-auto flex flex-col md:flex-row justify-between items-start gap-24 text-black">
        <div className="flex flex-col items-start justify-start gap-8 md:w-[380px]">
          <div className="flex items-center gap-4">
            <img className="w-12 h-12" alt="" src="/vector1.svg" />
            <div className="logo_text font-bold text-4xl">Travlog</div>
          </div>
          <div className="text-4xl text-gray-500 inline-block">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </div>
          <div className="flex items-start justify-start gap-4">
            <img className="w-8 h-8" alt="" src="/group.svg" />
            <img className="w-8 h-8" alt="" src="/group1.svg" />
            <img className="w-8 h-8" alt="" src="/group-8.svg" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
          <div className="flex flex-col items-start justify-start gap-4">
            <b className="font-bold text-4xl">Company</b>
            <div className='text-gray-400'>About</div>
            <div className='text-gray-400' >Career</div>
            <div className='text-gray-400' >Mobile</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <b className="font-bold text-4xl">Contact</b>
            <div className='text-gray-400' >Why Travlog?</div>
            <div className='text-gray-400' >Partner with us</div>
            <div className='text-gray-400' >FAQ’s</div>
            <div className='text-gray-400' >Blog</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <b className="font-bold text-4xl">Meet Us</b>
            <div className='text-gray-400' >+00 92 1234 56789</div>
            <div className='text-gray-400' >info@travlog.com</div>
            <div className="flex flex-col items-start justify-start gap-1">
              <div className='text-gray-400' >205. R Street, New York</div>
              <div className='text-gray-400' >BD23200</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
