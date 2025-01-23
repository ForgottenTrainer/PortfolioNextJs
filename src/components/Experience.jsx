import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const timelineItems = [
    {
      time: "April 2024 - December 2024",
      title: "Digital Family",
      description: [
        "Responsible for the administration and optimization of Zoho's CRM system, ensuring full functionality and customization to business needs.",
        "Implemented automations within the CRM to improve workflows, reducing data processing time by 20% and increasing sales team efficiency.",
        "Developed and delivered CRM system updates, including new features and modules that improved data capture and reporting by 30%."
      ]
    },
    {
      time: "August 2021 - November 2023",
      title: "JPS Servicios Industriales",
      description: [
        "Responsible for preventive and corrective maintenance of computer systems.",
        "Developed and optimized an inventory management system.",
        "Increased process efficiency by 30% through system improvements."
      ]
    },
    {
      time: "January 2023 - August 2023",
      title: "GRIP",
      description: [
        "Engineered a solution that caters to a diverse clientele, improving programming efficiency by 25%.",
        "Implemented MySQL for database management, prioritizing data security and user information integrity.",
        "Developed a custom appointment management system for GRIP as a Social Service Developer."
      ]
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.5 },
    }),
  };

  return (
    <div className="mx-auto pl-5 pr-5 lg:pl-10 lg:pr-10 lg:pt-5" id="experience">
      <h3 className="text-4xl pb-10 font-normal">Experience</h3>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            className="grayscale rounded-lg max-w-full h-auto"
            src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        {/* Lista de experiencia */}
        <div className="flex flex-col ">
          <ol className="relative border-s border-gray-200 items-center justify-center">
            {timelineItems.map((item, index) => (
              <motion.li
                key={index}
                className="mb-10 ms-4"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                  {item.time}
                </time>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mb-4 text-base font-normal text-gray-500">
                  {item.description.map((desc, i) => (
                    <span key={i}>
                      {desc}
                      <br />
                    </span>
                  ))}
                </p>
              </motion.li>
            ))}
          </ol>
          <div className='pt-3 justify-start items-start '>
            <a href='./rogerEng-cv.pdf' target="_blank" rel="noopener noreferrer" className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
