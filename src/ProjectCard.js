import React, { useEffect, useRef } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import "./App.css";

const ProjectCard = ({ project, index }) => {
    const { title, description, image, link } = project;
    const cardRef = useRef(null);
    
    useEffect(() => {
        if (cardRef.current) {
            cardRef.current.style.setProperty('--i', index + 1);
        }
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
        
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [index]);
  
    return (
        <div className="project-card" ref={cardRef}>
            <img src={image} alt={title} className="project-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project <FaArrowCircleRight />
            </a>
        </div>
    );
};

export default ProjectCard;