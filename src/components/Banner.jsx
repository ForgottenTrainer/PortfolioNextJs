import React from 'react'
import Me from './../assets/me.png';
import SocialMedia from './SocialMedia';

export const Banner = () => {
  return (
    <div className='pl-5 pr-5 lg:pl-10 lg:pr-10 pt-5 pb-5'>
        <div className="bg-black text-white p-3 rounded-lg">
            <div className="grid lg:grid-cols-2 gap-4">
                <div className="pt-10 flex items-center justify-center">
                    <img src={Me} alt="Rogelio Gonzalez Perez" className="w-72" />
                </div>
                <div className="flex flex-col pt-5 items-start justify-center ">
                    <p className="text-gray-400 text-sm lg:text-md pb-3 ">
                        WORK TOGETHER
                    </p>
                    <p className="text-gray-300 text-xl lg:text-3xl">
                        Let's make your idea come true
                    </p>
                    <p className="text-gray-400 text-md lg:text-lg pb-3 pr-10 mt-3">
                    Let's make your vision a reality! I specialize in crafting tailored web solutions that meet your unique needs. Whether it's building a custom application, optimizing your online presence, or developing innovative features, I'm here to help you bring your ideas to life. Together, we can create something exceptional. Let's work together!
                    </p>
                    <SocialMedia />
                </div>
            </div>
        </div>
    </div>
  )
}
