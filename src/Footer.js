import React from 'react';
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
    </footer>
  );
};

export default Footer;
