import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-lg font-bold text-white">MyPortfolio</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About Me</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="mailto:roy.gonz312@gmail.com"
            className="px-6 py-2 bg-gray-800 bg-opacity-40 backdrop-blur-md text-white border border-gray-500 rounded-lg hover:bg-opacity-50 hover:scale-105 transition-all cursor-pointer"
          >
            Contact Me
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden text-center bg-black bg-opacity-90 backdrop-blur-md px-4 py-6">
          <ul className="space-y-4">
            <li>
              <a
                href="#home"
                className="block text-gray-300 hover:text-white transition"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-gray-300 hover:text-white transition"
                onClick={toggleMenu}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block text-gray-300 hover:text-white transition"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block text-gray-300 hover:text-white transition"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-6 py-2 bg-gray-800 bg-opacity-40 text-center backdrop-blur-md text-white border border-gray-500 rounded-lg hover:bg-opacity-50 hover:scale-105 transition-all cursor-pointer"
                onClick={toggleMenu}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;