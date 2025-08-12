import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion'; // ✅ Import Framer Motion

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Text */}
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}  // start faded & left
          animate={{ opacity: 1, x: 0 }}    // animate to visible & normal position
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-indigo-600">Avishek Das</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Software Developer / Java Developer
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Electronics and Communication Engineering student with expertise in Java, C, and embedded systems development.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/Avishekprince" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center">
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/avishek-das-6a856a270" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a href="mailto:aec.ece.avishekdas.2026.014@gmail.com" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 flex items-center">
              <FaEnvelope className="mr-2" /> Email
            </a>
            <a href="tel:+916295573996" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300 flex items-center">
              <FaPhone className="mr-2" /> Call
            </a>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}   // start faded & right
          animate={{ opacity: 1, x: 0 }}    // animate to visible & normal position
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src="/Images/profile.jpg" alt="Avishek Das" className="w-full h-full object-cover" />
            </div>
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Asansol, West Bengal
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
