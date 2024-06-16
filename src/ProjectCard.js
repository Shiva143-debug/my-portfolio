import "./App.css"
import { FaArrowCircleRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const { title, description, image, link } = project;
  
    return (
      <div className="project-card">
  
            <img src={image} alt={title} className="project-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project <FaArrowCircleRight />
            </a>
      </div>
    );
  };

export default ProjectCard