import React from "react";
import "./style/projects.css";


export const Projects = () => {
  const projects = [
    {
      title: "Data Fetching and Sorting",
      description:
        "Implemented asynchronous data fetching using the Fetch API, enabling real-time data retrieval. Developed sorting functionality to organize employee data by department and salary.",
      techStack: ["JavaScript", "CSS3", "HTML5", "Fetch API"],
      liveDemo: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees",
      githubRepo: "https://github.com/Gauravkushwa/Basic-Project",
    },
    {
      title: "bewakoof.com Clone",
      description:
        "Designed and developed a responsive UI similar to Bewakoof.com. Implemented animations and media queries for enhanced UX, with a navbar and footer.",
      techStack: ["JavaScript", "HTML", "CSS"],
      liveDemo: "https://www.bewakoof.com/",
      githubRepo: "https://github.com/Gauravkushwa/projects/tree/main/bewakeef%20website",
    },
    {
      title: "Engagebay.com Clone",
      description:
        "Developed a responsive clone of Engagebay.com, ensuring usability across different devices. Designed div animations to enhance the visual appeal.",
      techStack: ["JavaScript", "HTML", "CSS"],
      liveDemo: "https://www.engagebay.com/",
      githubRepo: "https://github.com/Gauravkushwa/second/tree/main/engageboy%20webside",
    },
  ];
  
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-stack">
              {project.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className="links">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-demo">
                Live Demo
              </a>
              <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="github-repo">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

