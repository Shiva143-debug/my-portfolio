import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedLogo.css';

const AnimatedLogo = ({ name = "JD" }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const circleVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 10 
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  return (
    <motion.div 
      className="logo-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div 
        className="logo-circle"
        variants={circleVariants}
      >
        <motion.span 
          className="logo-text"
          variants={textVariants}
        >
          {name}
        </motion.span>
      </motion.div>
      <motion.div 
        className="logo-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        PORTFOLIO
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;