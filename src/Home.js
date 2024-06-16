import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import "./App.css"

const Home = () => {
    return (
      
        <>
           
            <div class="banner-section-bg-container d-flex justify-content-center flex-column">
                <div className="overlay">
                    <div className="intro text-center">
                        <h1>Welcome to MY Portfolio</h1>
                        <p style={{ fontSize: "20px" }}>I am a passionate web developer dedicated to creating modern, responsive websites that provide a seamless user experience.</p>
                        <p>Explore my work and services below, and feel free to get in touch!</p>
                    </div>
                </div>
            </div>

            <div class="service pt-5 pb-5 mt-5" id="service">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="wcu-section-heading">services</h1>
                            <p class="wcu-section-description">
                                We are here to create Web Applications, Websites and Mobile Applications For you.

                            </p>
                        </div>
                        
                        <div class="col-12 col-md-4">
                        <Link to="/projects#website" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div class="service-card p-3 mb-3">
                                <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1718452768/web-template-website-design-concept_53876-125608_w4ovqd.avif" alt="website" class="service-card-image" />
                                <h1 class="service-card-title mt-3">Website Development</h1>
                                <p class="service-card-description">
                                    We specialize in creating stunning, responsive websites tailored to your needs. Whether you need a simple portfolio site or a complex e-commerce platform, we have the expertise to deliver.
                                </p>
                            </div>
                            </Link>
                        </div>
                        
                        <div class="col-12 col-md-4">
                        <Link to="/projects#webApplication" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div class="service-card p-3 mb-3">
                                <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/c_thumb,w_200,g_face/v1718452778/web-application_nikjtf.png" alt="webapplication" class="service-card-image" />
                                <h1 class="service-card-title mt-3">Web Application Development</h1>
                                <p class="service-card-description">
                                    Need a custom web application to streamline your business processes? We develop powerful web applications using the latest technologies to help you achieve your goals.
                                </p>
                            </div>
                            </Link>
                        </div>
                        <div class="col-12 col-md-4">
                        <Link to="/projects#ecommerceApplication" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div class="service-card p-3 mb-3">
                                <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/c_thumb,w_200,g_face/v1718453417/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with_pyqoxn.webp"  alt="ecommerce" class="service-card-image" />
                                <h1 class="service-card-title mt-3">E-commerce Solutions</h1>
                                <p class="service-card-description">
                                    Looking to sell products online? Our e-commerce solutions are designed to help you reach more customers and increase your sales. We'll create a secure and user-friendly online store for your business.
                                </p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="about-section pt-5 pb-5" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-5">

                            <div >
                                <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1718454904/Screenshot_20240330-102030_b65ec2.png" alt="myimage" class="about-section-img" />
                            </div>
                        </div>
                        <div class="col-12 col-md-7">
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

            <div class="footer-section pt-5 pb-5" id="followUsSection">
                {/* follow-us-section */}
                <div class=" pt-5 pb-5" >
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="follow-us-section-heading">Follow Me</h1>
                            </div>
                            <div class="col-12">
                                <div class="d-flex flex-row justify-content-center">
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
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            {/* <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png" class="food-munch-logo" /> */}
                            <h1 class="footer-section-mail-id">Contact Details</h1>
                            <p class="footer-section-address">
                                Phone No: +91 7801009364
                            </p>
                            <p class="footer-section-address">
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
