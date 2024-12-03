import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      className="portfolio"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <h2>My Work</h2>
      <div className="projects">
        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>Project {index + 1}</h3>
            <p>Description of project {index + 1}.</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
