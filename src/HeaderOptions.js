import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/TextLogo.css';
import AnimatedLogo from './components/AnimatedLogo';
import GradientText from './components/GradientText';

// This file demonstrates the three different options for replacing the image in the header

const HeaderWithOptions = ({ option = 1 }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Render the selected option
    const renderBrandOption = () => {
        switch(option) {
            case 1:
                // Option 1: Animated Text Logo with Your Name
                return (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-logo"
                    >
                        <motion.span
                            className="text-logo-name"
                            whileHover={{ 
                                scale: 1.1,
                                color: "#4169E1",
                                transition: { duration: 0.2 }
                            }}
                        >
                            YOUR NAME
                        </motion.span>
                        <motion.span 
                            className="text-logo-title"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Web Developer
                        </motion.span>
                    </motion.div>
                );
            
            case 2:
                // Option 2: Animated Logo with SVG
                return <AnimatedLogo name="YN" />;
            
            case 3:
                // Option 3: Animated Text Effect with Gradient
                return <GradientText firstName="YOUR" lastName="NAME" />;
            
            default:
                return (
                    <img 
                        src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1718950803/fk331ymq8h98h5gihrce.webp" 
                        alt="logo" 
                        style={{ width: "150px" }}
                    />
                );
        }
    };

    return (
        <Navbar expand="lg" className={`navbar fixed-top ${scrolled ? 'scrolled' : ''}`} variant="dark">
            <div className="d-flex justify-content-between align-items-center w-100 px-3">
                <Navbar.Brand href="/">
                    {renderBrandOption()}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/#skills">Skills</Nav.Link>
                        <Nav.Link href="/#service">Services</Nav.Link>
                        <Nav.Link href="/#about">About</Nav.Link>
                        <LinkContainer to="/projects">
                            <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>
                        <Nav.Link href="/#followUsSection">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default HeaderWithOptions;