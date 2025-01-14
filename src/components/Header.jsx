import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './NavBar';
import Me from './../assets/me.png';
import SocialMedia from './SocialMedia';

const Header = () => {
  // Variantes de animación
  const textVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="bg-black h-[50em]">
      <NavBar />
      <div className="lg:pt-5">
        <div className="grid lg:grid-cols-2 gap-4 text-white">
          {/* Animación para el texto */}
          <motion.div
            className="flex flex-col pt-5 items-center justify-center text-center"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            <motion.p
              className="text-4xl font-bold pb-4 lg:text-7xl"
              variants={textVariant}
            >
              Rogelio Gonzalez Perez
            </motion.p>
            <motion.h1
              className="text-xl lg:text-3xl font-medium"
              variants={textVariant}
            >
              Computer System Engineer & <br /> Web Developer
            </motion.h1>
            <motion.div className="pt-5" variants={textVariant}>
              <SocialMedia /> 

            </motion.div>
          </motion.div>

          {/* Animación para la imagen */}
          <motion.div
            className="pt-10 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={imageVariant}
          >
            <motion.img
              src={Me}
              alt="Rogelio Gonzalez Perez"
              className=""
              variants={imageVariant}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
