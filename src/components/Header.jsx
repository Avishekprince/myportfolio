import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600">Avishek Das</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#hero" className="text-gray-700 hover:text-indigo-600 transition duration-300">Home</a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600 transition duration-300">About</a>
          <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition duration-300">Skills</a>
          <a href="#experience" className="text-gray-700 hover:text-indigo-600 transition duration-300">Experience</a>
          <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition duration-300">Projects</a>
          <a href="#education" className="text-gray-700 hover:text-indigo-600 transition duration-300">Education</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition duration-300">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <a href="#hero" className="text-gray-700 hover:text-indigo-600 transition duration-300" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition duration-300" onClick={toggleMenu}>About</a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition duration-300" onClick={toggleMenu}>Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-indigo-600 transition duration-300" onClick={toggleMenu}>Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition duration-300" onClick={toggleMenu}>Projects</a>
            <a href="#education" className="text-gray-700 hover:text-indigo-600 transition duration-300" onClick={toggleMenu}>Education</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition duration-300" onClick={toggleMenu}>Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;