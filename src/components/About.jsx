import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          About Me
        </motion.h2>

        {/* Animated Card */}
        <motion.div
          className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.p
            className="text-lg text-gray-700 mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Highly motivated Electronics and Communication Engineering (ECE) student with a solid programming foundation in Java and C. Proficient in software development and database management (MySQL).
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 mb-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Experienced in designing and implementing embedded systems and automation solutions using microcontrollers such as Arduino. Passionate about developing real-world IT and embedded applications.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Committed to continuous learning in emerging technologies including IoT, cloud computing, and artificial intelligence (AI).
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
