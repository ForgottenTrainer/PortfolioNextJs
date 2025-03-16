import React from 'react'
import logo from './../assets/logo.png'

const Footer = () => {
  return (
    <div className='pl-10 pr-10 lg:pl-5 lg:pr-5'>
        <footer class="w-full bg-white p-8">
            <div class="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                <img src={logo} alt="logo"className='w-10 h-10' />
            
                <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <a
                    href="/"
                    class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
                    >
                    Home
                    </a>
                </li>
                <li>
                    <a
                    href="#about"
                    class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
                    >
                   About Me
                    </a>
                </li>
                <li>
                    <a
                    href="#experience"
                    class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
                    >
                    Experience
                    </a>
                </li>
                <li>
                    <a
                    href="#projects"
                    class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
                    >
                    Projects
                    </a>
                </li>
                <li>
                    <a
                    href="mailto:roy.gonz312@gmail.com"
                    class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
                    >
                    Contact 
                    </a>
                </li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer