// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  // Variants for left and right content
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  // Bounce effect for the entire section
  const bounceVariants = {
    visible: {
      y: [0, -10, 0, -5, 0],
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={bounceVariants}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div variants={leftVariants}>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-indigo-600 mr-4" size={20} />
                <span>aec.ece.avishekdas.2026.014@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-indigo-600 mr-4" size={20} />
                <span>+916295573996</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-indigo-600 mr-4" size={20} />
                <span>Asansol, West Bengal, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div variants={rightVariants}>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
             <a
                  href="https://github.com/Avishekprince"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 transition duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 
                        0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                        0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61
                        -.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729
                        1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998
                        .108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93
                        0-1.31.467-2.38 1.235-3.22-.135-.304-.54-1.527.105-3.176
                        0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404
                        c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 
                        3.285-1.23.645 1.649.24 2.872.12 3.176.765.84 
                        1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92
                        .43.37.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.265 
                        0 .315.21.69.825.57C20.565 22.092 24 17.592 
                        24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>

              <a
                href="https://www.linkedin.com/in/avishek-das-6a856a270"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:aec.ece.avishekdas.2026.014@gmail.com"
                className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition duration-300"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
