// src/components/Experience.js
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Embedded Systems Developer",
      company: "Smart Road-Drying Robotic Vehicle (Academic Project)",
      location: "Asansol, West Bengal",
      period: "01/2025 - 06/2025",
      responsibilities: [
        "Designed and built an autonomous robotic vehicle to dry wet roads using heating mechanisms and moisture sensors",
        "Implemented sensor feedback control to differentiate between dry and wet surfaces",
        "Focused on automation, embedded control, and real-time environmental interaction",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2, // delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative pl-8 border-l-2 border-indigo-200"
              variants={itemVariants}
            >
              <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-2 top-0"></div>
              <motion.div className="mb-4" variants={itemVariants}>
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <p className="text-lg text-indigo-600">{exp.company}</p>
                <p className="text-gray-600">
                  {exp.location} | {exp.period}
                </p>
              </motion.div>

              <motion.ul
                className="list-disc pl-5 space-y-2"
                variants={containerVariants}
              >
                {exp.responsibilities.map((resp, idx) => (
                  <motion.li
                    key={idx}
                    className="text-gray-700"
                    variants={itemVariants}
                  >
                    {resp}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
