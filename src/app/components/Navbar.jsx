"use client";
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import { useState } from 'react';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title : "About",
        path: "#about"
    },
    {
        title : "Projects",
        path: "#projects"
    },
    {
        title : "Contact",
        path: "#contact"
    },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <nav className='fixed top-0 left-0 right-0 z-100 bg-[#121212] bg-opacity-90'>
      <div className="flex flex-wrap z-100 item-center justify-between mx-auto p-4 py-2">
        <Link href={'/'} className="text-lg md:text-5xl z-100 text-white font-semibold">
          WebDev
        </Link>
        <div className="mobile-menu block md:hidden">
          {
            !navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>

              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

              </button>
            )
          }
        </div>
        <div className="menu z-100 hidden md:block md:w-auto" id="navbar">
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title}/>
                </li>
            ))}                
            </ul>
        </div>
      </div>
      {
        navbarOpen ? <MenuOverlay links={navLinks} /> : null
      }
    </nav>
  )
}

export default Navbar
