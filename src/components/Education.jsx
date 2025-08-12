// src/components/Education.js
import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Electronics and Communication",
      institution: "Asansol Engineering College, Asansol",
      period: "2022-Present",
      gpa: "7.63 /10"
    },
    {
      degree: "Higher Secondary Examination",
      institution: "DAV Public School, Kanyapur",
      period: "2022",
      gpa: "9.15 /10"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      id="education"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          variants={itemVariants}
        >
          Education
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md mb-6"
              variants={itemVariants}
            >
              <motion.div
                className="flex flex-col md:flex-row md:justify-between md:items-center mb-4"
                variants={itemVariants}
              >
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  variants={itemVariants}
                >
                  {edu.degree}
                </motion.h3>
                <motion.span
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mt-2 md:mt-0"
                  variants={itemVariants}
                >
                  {edu.period}
                </motion.span>
              </motion.div>
              <motion.p
                className="text-lg text-gray-700 mb-2"
                variants={itemVariants}
              >
                {edu.institution}
              </motion.p>
              <motion.p
                className="text-indigo-600 font-medium"
                variants={itemVariants}
              >
                GPA: {edu.gpa}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
