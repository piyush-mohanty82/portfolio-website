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
  const [active, setActive] = useState(false);
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900'>
      <div className='max-w-7xl mx-auto px-8 py-5 flex justify-between items-center'>
        <a href="#" className='flex  items-center gap-2 text-orange-500  text-2xl drop-shadow-[0_0_0.5px_#FA6E00] font-semibold uppercase font-family-k2d bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent'  >
          
          Piyush
        </a>
        <ul className='hidden md:flex gap-10'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`text-sm font-medium transition-colors duration-200 ${active === link.label ? "text-orange-500" : "text-gray-300 hover:text-orange-400"}`} 
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
        <div className='md:hidden bg-zinc-950 px-8 pb-6 border-t border-zinc-800'>
          <ul className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setIsOpen(false);
                  }}
                  className={`text-sm font-medium transition-colors duration-200 block ${
                    active === link.label ? "text-orange-500" : "text-gray-300 hover:text-orange-400"
                  }`}
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
