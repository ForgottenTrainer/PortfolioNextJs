"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-tl from-purple-900 via-indigo-700 via-blue-900 to-blue-400">Hello I'm {"  "}</div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Rogelio',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base  mb-6 lg:text-xl">Fullstack web developer passionate about the world of technology </p>
          <div className="text-center sm:text-left">
            <a href='https://www.linkedin.com/in/rogelio-gonz%C3%A1lez-p%C3%A9rez-891493212/' className="w-full text-white sm:w-fit mb-3 px-6 py-3 rounded-full mr-4 bg-gradient-to-tl from-purple-900 via-indigo-700 via-blue-900 to-blue-400 hover:bg-slate-200 text-black">
              Hire me
            </a>
            <a href='cv.pdf' className="w-full sm:w-fit px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">
              Download CV
            </a>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/Roger.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="hero image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
