
import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GradientText from './components/GradientText';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

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

    return (
        <Navbar expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)} className={`navbar fixed-top ${scrolled ? 'scrolled' : ''}`} variant="dark">
            <div className="container-fluid  d-flex justify-content-between align-items-center">
                <Navbar.Brand href="/" className="me-auto">
                    <GradientText firstName="SHIVA SHANKARA" lastName="PRASAD" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link href="/#skills" onClick={() => setExpanded(false)}>Skills</Nav.Link>
                        <Nav.Link href="/#service" onClick={() => setExpanded(false)}>Services</Nav.Link>
                        <Nav.Link href="/#about" onClick={() => setExpanded(false)}>About</Nav.Link>
                        <LinkContainer to="/projects">
                            <Nav.Link onClick={() => setExpanded(false)}>Projects</Nav.Link>
                        </LinkContainer>
                        <Nav.Link href="/#followUsSection" onClick={() => setExpanded(false)}>Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>

    );
};

export default Header;