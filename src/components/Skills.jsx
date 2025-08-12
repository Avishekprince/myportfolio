// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = ["Java", "C", "HTML5", "CSS3", "JavaScript", "Arduino", "MySQL", "Arduino IDE", "Git", "VS Code", "OOP", "Data Structures"];
  
  const languages = [
    { name: "Bengali", level: "Native" },
    { name: "English", level: "Proficient" },
    { name: "Hindi", level: "Proficient" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        
        {/* Programming & Development */}
        <div className="mb-16">
          <motion.h3 
            className="text-xl font-semibold text-gray-800 mb-6 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Programming & Development
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technicalSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-lg font-medium shadow-sm"
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Languages */}
        <div>
          <motion.h3 
            className="text-xl font-semibold text-gray-800 mb-6 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Languages
          </motion.h3>
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-gray-800 mb-2">{lang.name}</h4>
                <p className="text-indigo-600">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
