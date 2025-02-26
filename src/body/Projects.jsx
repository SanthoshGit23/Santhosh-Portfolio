import React from 'react';
import ProjectImg from "../assets/side-imgs/Projects.png";
import "./Projects.css";

const projects = [
  { id: 'pro1', name: 'Tic-Tac-Toe Game', link: 'https://github.com/SanthoshGit23/TicTacToe' },
  { id: 'pro2', name: 'ToDo-List-App', link: 'https://github.com/SanthoshGit23/To-Do-List-App' },
  { id: 'pro3', name: 'Mini e-commerce', link: 'https://github.com/SanthoshGit23/mini-e-commerce' },
  { id: 'pro4', name: 'Resume', link: 'https://github.com/SanthoshGit23/Resume' },
  { id: 'pro5', name: 'Travel-Website', link: 'https://github.com/SanthoshGit23/TravelWeb' },
  { id: 'pro6', name: 'BMI-Calculator ', link: 'https://github.com/SanthoshGit23/Bmi-Cal.git' }
];

const Projects = () => (
  <div className='projects-container' id='projects'>
    <div className="projects">
      <h2 data-aos="fade-right">PROJECTS</h2>
      <ol>
  {projects.map(({ id, name, link }) => (
    <div key={id} className="pro-list">
      <li className="pro abc" id={id} data-aos="fade-right">
        {name}
      </li>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" data-aos="fade-right">
          Click to View
        </a>
      )}
    </div>
  ))}
</ol>

    </div>
    <div className="pro-img" data-aos="zoom-in-left">
      <img src={ProjectImg} alt="Projects" />
    </div>
  </div>
);

export default Projects;
