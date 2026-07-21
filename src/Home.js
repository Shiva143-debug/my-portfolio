import React, { useEffect, useRef } from 'react';
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
    faGitAlt
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
    // Safe scroll-reveal: add .in to .reveal elements when they enter viewport
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        reveals.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const services = [
        {
            to: "/projects#website",
            img: "https://res.cloudinary.com/dxgbxchqm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1718452768/web-template-website-design-concept_53876-125608_w4ovqd.avif",
            title: "Website Development",
            desc: "Pixel-perfect, blazing-fast websites that load in under 2 seconds and turn visitors into clients."
        },
        {
            to: "/projects#webApplication",
            img: "https://res.cloudinary.com/dxgbxchqm/image/upload/c_thumb,w_200,g_face/v1718452778/web-application_nikjtf.png",
            title: "Web Applications",
            desc: "Scalable full-stack apps with real-time features, clean architecture, and production-ready code."
        },
        {
            to: "/projects#ecommerceApplication",
            img: "https://res.cloudinary.com/dxgbxchqm/image/upload/c_thumb,w_200,g_face/v1718453417/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with_pyqoxn.webp",
            title: "E-commerce Solutions",
            desc: "End-to-end online stores with secure payments, inventory management, and conversion-focused UI."
        },
        {
            to: "/projects#mobileApplications",
            img: "https://res.cloudinary.com/dxgbxchqm/image/upload/v1752136244/download_tcs2px.jpg",
            title: "Mobile Applications",
            desc: "Cross-platform mobile apps with native-like performance, offline support, and polished interfaces."
        }
    ];

    return (
        <>
            {/* ===== Hero ===== */}
            <div className="banner-section-bg-container d-flex justify-content-center flex-column" id="home">
                <div className="hero-orb one"></div>
                <div className="hero-orb two"></div>
                <div className="intro text-center">
                    <span className="eyebrow">Full-Stack Developer &amp; UI Engineer</span>
                    <h1>I Build Products<br/>That People Love to Use</h1>
                    <p>I turn complex problems into clean, fast, and beautiful web applications. From concept to deployment — I own the entire stack.</p>
                    <div className="hero-cta">
                        <a href="/#service" className="btn-primary-glass">View My Services</a>
                        <a href="/#followUsSection" className="btn-ghost-glass">Get In Touch</a>
                    </div>
                </div>
            </div>

            {/* ===== Skills ===== */}
            <div className="skills-section" id="skills">
                <div className="section-shell">
                    <span className="section-eyebrow reveal">What I Work With</span>
                    <h2 className="section-title reveal">My Skills</h2>
                    <p className="section-subtitle reveal">The tools and technologies I use daily to ship production-grade products — from frontend frameworks to cloud infrastructure.</p>

                    <div className="skills-flow">
                        {[
                            { title: "Frontend Development", icon: faReact, items: [
                                { icon: faReact, name: "React" },
                                { icon: faJs, name: "JavaScript" },
                                { icon: faHtml5, name: "HTML5" },
                                { icon: faCss3Alt, name: "CSS3" },
                                { icon: faBootstrap, name: "Bootstrap" },
                                { emoji: "📦", name: "Redux" }
                            ]},
                            { title: "Backend Development", icon: faServer, items: [
                                { icon: faNode, name: "Node.js" },
                                { icon: faServer, name: "Express.js" },
                                { icon: faDatabase, name: "PostgreSQL" },
                                { icon: faDatabase, name: "SQL" },
                                { icon: faPython, name: "Python" },
                                { emoji: "🔗", name: "GraphQL" }
                            ]},
                            { title: "Tools & Technologies", icon: faCode, items: [
                                { icon: faGitAlt, name: "Git" },
                                { icon: faCode, name: "VS Code" },
                                { emoji: "🖥️", name: "Cursor" }
                            ]},
                            { title: "Other Skills", icon: faLaptopCode, items: [
                                { icon: faGlobe, name: "Responsive Design" },
                                { icon: faMobile, name: "Mobile-First" },
                                { icon: faLaptopCode, name: "UI/UX Principles" },
                                { icon: faServer, name: "RESTful APIs" },
                                { emoji: "🎨", name: "Figma" }
                            ]},
                            { title: "AI & Emerging Tech", icon: faLaptopCode, items: [
                                { emoji: "🤖", name: "ChatGPT" },
                                { emoji: "🧠", name: "GitHub Copilot" },
                                { emoji: "🔮", name: "Gemini AI" },
                                { emoji: "❤️", name: "Lovable" },
                                { emoji: "⚡", name: "Bolt" },
                                { emoji: "🔧", name: "Opencode" }
                            ]}
                        ].map((cat, ci) => (
                            <div className="skill-row reveal" key={ci}>
                                <div className="skill-row-head">
                                    <FontAwesomeIcon icon={cat.icon} className="skill-row-icon" />
                                    <span className="skill-row-title">{cat.title}</span>
                                </div>
                                <div className="skill-pills">
                                    {cat.items.map((it, ii) => (
                                        <span className="skill-pill" key={ii} style={{ animationDelay: `${ii * 0.06}s` }}>
                                            {it.icon
                                                ? <FontAwesomeIcon icon={it.icon} className="skill-pill-icon" />
                                                : <span className="skill-pill-emoji">{it.emoji}</span>}
                                            <span className="skill-pill-name">{it.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== Services ===== */}
            <div className="service" id="service">
                <div className="section-shell">
                    <span className="section-eyebrow reveal">What I Offer</span>
                    <h2 className="section-title reveal">Services</h2>
                    <p className="section-subtitle reveal">End-to-end development services — from concept and design to deployment and ongoing support.</p>

                    <div className="services-row">
                        {services.map((s, i) => (
                            <Link key={i} to={s.to} className="service-tile reveal" style={{ textDecoration: 'none' }}>
                                <div className="service-tile-media">
                                    <img src={s.img} alt={s.title} className="service-tile-image" />
                                </div>
                                <div className="service-tile-body">
                                    <h3 className="service-card-title">{s.title}</h3>
                                    <p className="service-card-description">{s.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== About ===== */}
            <div className="about-section" id="about">
                <div className="section-shell">
                    <span className="section-eyebrow reveal">About Me</span>
                    <h2 className="section-title reveal">Turning Ideas Into Reality</h2>
                    <div className="about-card reveal">
                        <h3>Who I Am</h3>
                        <p>
                            I'm Shiva — a full-stack developer who doesn't just write code, I solve problems. I think in systems, design in components, and ship products that actually work. Every line I write is intentional, every interface I build is intuitive.
                        </p>

                        <h3>My Journey</h3>
                        <p>
                            Started with curiosity, built with obsession. Over 3 years and 25+ projects, I've shipped e-commerce platforms, SaaS dashboards, and mobile apps for clients across multiple industries. I've worked with startups building their MVP from scratch and with established teams scaling existing products. The stack evolves — the fundamentals don't.
                        </p>

                        <h3>What I Do Differently</h3>
                        <p>
                            I don't hand off code and disappear. I architect for the long haul — clean, maintainable, and ready to scale. I obsess over load times, accessibility, and the tiny interaction details that make users stay. If it's worth building, it's worth building right.
                        </p>

                        <div className="about-stats">
                            <div className="about-stat">
                                <div className="num">25+</div>
                                <div className="label">Projects Delivered</div>
                            </div>
                            <div className="about-stat">
                                <div className="num">3+</div>
                                <div className="label">Years Experience</div>
                            </div>
                            <div className="about-stat">
                                <div className="num">100%</div>
                                <div className="label">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Contact ===== */}
            <div className="footer-section" id="followUsSection">
                <div className="pt-4 pb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="follow-us-section-heading reveal">Let's Work Together</h1>
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
                            <h1 className="footer-section-mail-id">Get In Touch</h1>
                            <p className="footer-section-address">Phone No: +91 7801009364</p>
                            <p className="footer-section-address">Email: shivarama99666@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
