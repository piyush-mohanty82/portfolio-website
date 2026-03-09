import React, { useState } from 'react'


const navLinks = [
  {label: "Home",href:"#home"},
  {label: "Service",href:"#service"},
  {label: "Projects",href:"#projects"},
  {label: "About",href:"#about"},
  {label: "Contact",href:"#contact"},
]
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md'>
      <div className='max-w-7xl mx-auto px-8 py-5 flex justify-between items-center'>
        <a href="#" className='flex  items-center gap-2 text-white font-bold text-lg'>
          
          Piyush
        </a>
        <ul className='hidden md:flex gap-10'>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'
                >
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
        <button
          className='md:hidden text-gray-300 hover:text-white flex flex-col gap-1'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>

        </button>
      </div>

      {isOpen && (
        <div className='md:hidden bg-zinc-950 px-8 pb-6 border-zinc-800'>
          <ul className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors text-sm block"
                >
                  {link.label}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
