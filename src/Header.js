
import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        // <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        //     <div class="container" >
    
        //         <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1718950803/fk331ymq8h98h5gihrce.webp" alt="logo" style={{width:"150px"}}/>
              
        //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div class="navbar-nav" style={{ marginLeft: "auto" }}>
        //                 <a class="nav-link active" id="navItem1" href="https://shivportfolio.vercel.app/#service">services</a>
        //                 <a class="nav-link" href="https://shivportfolio.vercel.app/#about" id="navItem2">About</a>
        //                 <Link to="/projects" style={{ color: "gray", fontWeight: "500", padding: "6px", textDecoration: "none" }}>Projects</Link>
        //                 <a class="nav-link" href="https://shivportfolio.vercel.app/#followUsSection" id="navItem4">Contact Me</a>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
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