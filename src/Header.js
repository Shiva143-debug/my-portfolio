
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="navbar-light bg-white fixed-top">
        <div className="container-fluid">
            <Navbar.Brand href="/">
                <img 
                    src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1718950803/fk331ymq8h98h5gihrce.webp" 
                    alt="logo" 
                    style={{ width: "150px" }}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="https://shivportfolio.vercel.app/#service">Services</Nav.Link>
                    <Nav.Link href="https://shivportfolio.vercel.app/#about">About</Nav.Link>
                    <LinkContainer to="/projects">
                        <Nav.Link>Projects</Nav.Link>
                    </LinkContainer>
                    <Nav.Link href="https://shivportfolio.vercel.app/#followUsSection">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
    )
}

export default Header