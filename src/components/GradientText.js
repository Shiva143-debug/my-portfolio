import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './GradientText.css';

const GradientText = ({ firstName = "JOHN", lastName = "DOE" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [replay, setReplay] = useState(true);
  
  // Reset animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setReplay(false);
      setTimeout(() => setReplay(true), 100);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const letterVariants = {
    initial: { y: -20, opacity: 0 },
    animate: i => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300
      }
    }
  };
  
  const renderLetters = (text, startIndex = 0) => {
    return text.split('').map((letter, i) => (
      <motion.span
        key={`${letter}-${i}`}
        custom={startIndex + i}
        variants={letterVariants}
        initial="initial"
        animate={replay ? "animate" : "initial"}
        whileHover="hover"
        className={`gradient-letter ${isHovered ? 'hovered' : ''}`}
        style={{ 
          animationDelay: `${(startIndex + i) * 0.1}s`,
        }}
      >
        {letter}
      </motion.span>
    ));
  };
  
  return (
    <div 
      className="gradient-text-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="gradient-text-name">
        {renderLetters(firstName)}
        <span className="gradient-text-space">&nbsp;</span>
        {renderLetters(lastName, firstName.length + 1)}
      </div>
      <motion.div 
        className="gradient-text-title"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        DEVELOPER & DESIGNER
      </motion.div>
    </div>
  );
};

export default GradientText;