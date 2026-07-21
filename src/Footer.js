import React from 'react';
<<<<<<< HEAD
import './App.css';

const Footer = () => {
  return (
    <footer>
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <p>
          &copy; {currentYear} My Portfolio | Made with <FontAwesomeIcon icon={faHeart} style={{ color: '#E6E6FA' }} /> by Shiva
        </p>
      </div>
>>>>>>> b8484657ad0ef229fc8f2b1f64ffacdedf29952c
    </footer>
  );
};

export default Footer;
