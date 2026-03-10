import React from 'react'

import { FaInstagram, FaLinkedinIn, FaDribbble, FaBehance } from "react-icons/fa";

const socialLinks = [
  { icon: <FaInstagram size={18} />, href: "#" },
  { icon: <FaLinkedinIn size={18} />, href: "#" },
  { icon: <FaDribbble size={18} />, href: "#" },
  { icon: <FaBehance size={18} />, href: "#" },
];
const Hero = () => {
  return (
    <section
        id='home'
        className='relative min-h-screen bg-zinc-950 flex items-center overflow-hidden pt-20'
    >
      <div className='max-w-7xl mx-auto px-8 w-full  z-50'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          
          {/* left side */}
          <div className='flex flex-col gap-7 z-18'>
            {/* Greeting */}
            <div>
              <p className='text-gray-500 text-lg mb-1'>Hi I am</p>
              <h2
                className='text-white text-2xl font-semibold'
                style={{fontFamily:"'K2D',sans-serif"}}
              >
                Piyush Mohanty
              </h2>
            </div>
            {/* Role */}
            <h1 className='text-5xl font-family-k2d lg:text-6xl font-black leading-tight bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent drop-shadow-[0_0_1px_#FA6E00]'>
              Full Stack <br /> Developer
            </h1>
            {/* social icons */}
            <div className='flex gap-3'>
              {socialLinks.map((s,i) => (
                <a 
                  key={i}
                  href={s.href}
                  className='w-11 h-11 rounded-full border border-zinc-600 flex items-center justify-center text-white  hover:border-orange-500 hover:text-orange-500 transition-all duration-200'
                >

                </a>
              ))}
            </div>
          </div>
        </div>
        

        

      </div>
        
    </section>
  )
}

export default Hero
