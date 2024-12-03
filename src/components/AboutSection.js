import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="about"
    >
      <h2>About Me</h2>
      <p>
        I'm a software developer specializing in building exceptional digital
        experiences.
      </p>
    </motion.section>
  );
};

export default AboutSection;
