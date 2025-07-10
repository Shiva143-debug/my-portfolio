import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faLinkedin,
    faGithub,
    faYoutube,
    faReact,
    faJs,
    faHtml5,
    faCss3Alt,
    faNode,
    faPython,
    faBootstrap,
    faGitAlt,
    faAws,
    faDocker
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase,
    faServer,
    faCode,
    faMobile,
    faLaptopCode,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import "./App.css";

const Home = () => {
    // Add animation delay to project cards
    useEffect(() => {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.setProperty('--i', index + 1);
        });

        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            item.style.setProperty('--i', index + 1);
        });
    }, []);

    return (
        <>
            <div className="banner-section-bg-container d-flex justify-content-center flex-column" id="home">
                <div className="overlay">
                    <div className="intro text-center">
                        <h1>Welcome to My Portfolio</h1>
                        <p style={{ fontSize: "20px" }}>I am a passionate web developer dedicated to creating modern, responsive websites that provide a seamless user experience.</p>
                        <p>Explore my work and services below, and feel free to get in touch!</p>
                    </div>
                </div>
            </div>

            {/* Skills Section - New Addition */}
            <div className="skills-section" id="skills">
                <div className="container">
                    <h2 className="skills-heading">My Skills</h2>

                    <div className="row">
                        <div className="col-md-6 skill-category">
                            <h3 className='text-center'>Frontend Development</h3>
                            <div className="skill-list">
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faReact} className="skill-icon" />
                                    <span className="skill-name">React</span>
                                </div>
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faJs} className="skill-icon" />
                                    <span className="skill-name">JavaScript</span>
                                </div>
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                                    <span className="skill-name">HTML5</span>
                                </div>
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
                                    <span className="skill-name">CSS3</span>
                                </div>
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
                                    <span className="skill-name">Bootstrap</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-icon">📦</span>
                                    <span className="skill-name">Redux</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 skill-category">
                            <h3 className='text-center'>Backend Development</h3>
                            <div className="skill-list">
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faNode} className="skill-icon" />
                                    <span className="skill-name">Node.js</span>
                                </div>
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faServer} className="skill-icon" />
                                    <span className="skill-name">Express.js</span>
                                </div>
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                                    <span className="skill-name">PostgreSQL</span>
                                </div>
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                                    <span className="skill-name">SQL</span>
                                </div>
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faPython} className="skill-icon" />
                                    <span className="skill-name">Python</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-icon">🔗</span>
                                    <span className="skill-name">GraphQL</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6 skill-category">
                            <h3 className='text-center'>Tools & Technologies</h3>
                            <div className="skill-list">
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faGitAlt} className="skill-icon" />
                                    <span className="skill-name">Git</span>
                                </div>
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faCode} className="skill-icon" />
                                    <span className="skill-name">VS Code</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-icon">🖥️</span>
                                    <span className="skill-name">Cursor</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-icon">🎬</span>
                                    <span className="skill-name">Zencoder</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 skill-category">
                            <h3 className='text-center'>Other Skills</h3>
                            <div className="skill-list">
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faGlobe} className="skill-icon" />
                                    <span className="skill-name">Responsive Design</span>
                                </div>
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faMobile} className="skill-icon" />
                                    <span className="skill-name">Mobile-First Approach</span>
                                </div>
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faLaptopCode} className="skill-icon" />
                                    <span className="skill-name">UI/UX Principles</span>
                                </div>
                                <div className="skill-item">
                                    <FontAwesomeIcon icon={faServer} className="skill-icon" />
                                    <span className="skill-name">RESTful APIs</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-icon">🎨</span>
                                    <span className="skill-name">Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6 skill-category">
                            <h3 className='text-center'>AI & Emerging Tech</h3>
                            <div className="skill-list">
                                <div className="skill-item">
                                    <span className="skill-icon">🤖</span>
                                    <span className="skill-name">ChatGPT</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-icon">🧠</span>
                                    <span className="skill-name">GitHub Copilot</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-icon">🔮</span>
                                    <span className="skill-name">Gemini AI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service pt-5 pb-5" id="service">
                <div >
                    <div className="row">
                        <div className="col-12">
                            <h1 className="wcu-section-heading">Services</h1>
                            <p className="wcu-section-description">
                                I create Web Applications, Websites,E-commerce Applications and Mobile Applications tailored to your specific needs.
                            </p>
                        </div>

                        <div className="col-12 col-md-3 mb-3">
                            <Link to="/projects#website" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="service-card p-3 m-3">
                                    <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1718452768/web-template-website-design-concept_53876-125608_w4ovqd.avif" alt="website" className="service-card-image" />
                                    <h1 className="service-card-title mt-3">Website Development</h1>
                                    <p className="service-card-description">
                                        I specialize in creating stunning, responsive websites tailored to your needs. Whether you need a simple portfolio site or a complex e-commerce platform, I have the expertise to deliver.
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-12 col-md-3 mb-3">
                            <Link to="/projects#webApplication" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="service-card p-3 m-3">
                                    <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/c_thumb,w_200,g_face/v1718452778/web-application_nikjtf.png" alt="webapplication" className="service-card-image" />
                                    <h1 className="service-card-title mt-3">Web Application Development</h1>
                                    <p className="service-card-description">
                                        Need a custom web application to streamline your business processes? I develop powerful web applications using the latest technologies to help you achieve your goals.
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-12 col-md-3 mb-3">
                            <Link to="/projects#ecommerceApplication" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="service-card p-3 m-3">
                                    <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/c_thumb,w_200,g_face/v1718453417/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with_pyqoxn.webp" alt="ecommerce" className="service-card-image" />
                                    <h1 className="service-card-title mt-3">E-commerce Solutions</h1>
                                    <p className="service-card-description">
                                        Looking to sell products online? My e-commerce solutions are designed to help you reach more customers and increase your sales. I'll create a secure and user-friendly online store for your business.
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-3 mb-3">
                            <Link to="/projects#mobileApplications" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="service-card p-3 m-3">
                                    <img
                                        src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1752136244/download_tcs2px.jpg"
                                        alt="mobile app development"
                                        className="service-card-image"
                                    />
                                    <h1 className="service-card-title mt-3">Mobile Applications</h1>
                                    <p className="service-card-description">
                                        Need a mobile app for your idea or business? I develop high-performing Android and iOS applications with intuitive UI and smooth functionality. Let's turn your vision into a mobile experience.
                                    </p>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className="about-section pt-5 pb-5" id="about">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-12 col-md-5 text-center">
                            <div>
                                <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1718454904/Screenshot_20240330-102030_b65ec2.png" alt="myimage" className="about-section-img" />
                            </div>
                        </div> */}
                        <div className="col-12 col-md-7">
                            <h3>Who I Am</h3>
                            <p>
                                I am a skilled web developer with a strong background in both front-end and back-end technologies. I have a passion for building efficient, scalable, and user-friendly web applications. With experience in a variety of programming languages and frameworks, I am always eager to learn new technologies and improve my skills.
                            </p>

                            <h3>My Journey</h3>
                            <p>
                                My journey into web development began with a fascination for how websites work and a desire to create my own. Over the years, I have honed my skills through formal education and practical experience, building numerous websites and applications for various clients. I take pride in my work and strive to exceed client expectations with every project.
                            </p>

                            <h3>What I Do</h3>
                            <p>
                                I specialize in developing high-quality websites, web applications, and mobile applications. Whether you need a simple landing page or a complex e-commerce platform, I have the expertise to deliver exceptional results. My goal is to help businesses establish a strong online presence and achieve their digital goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-section" id="followUsSection">
                <div className="pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="follow-us-section-heading">Follow Me</h1>
                            </div>
                            <div className="col-12">
                                <div className="d-flex flex-row justify-content-center">
                                    <a href="https://www.facebook.com/shiva.rama.7906" target="_blank" rel="noopener noreferrer" className="icon-link m-2" aria-label="Facebook">
                                        <FontAwesomeIcon icon={faFacebook} className="icon" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/shivaramagiri" target="_blank" rel="noopener noreferrer" className="icon-link m-2" aria-label="LinkedIn">
                                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCbitR2lLGe_IgEghpwTlKoQ" target="_blank" rel="noopener noreferrer" className="icon-link m-2" aria-label="YouTube">
                                        <FontAwesomeIcon icon={faYoutube} className="icon" />
                                    </a>
                                    <a href="https://github.com/Shiva143-debug" target="_blank" rel="noopener noreferrer" className="icon-link m-2" aria-label="GitHub">
                                        <FontAwesomeIcon icon={faGithub} className="icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="footer-section-mail-id">Contact Details</h1>
                            <p className="footer-section-address">
                                Phone No: +91 7801009364
                            </p>
                            <p className="footer-section-address">
                                Email: shivarama99666@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
