import React from 'react';
import { useTheme } from '@mui/material/styles';
import EducationImg from "../assets/side-imgs/Education.png";
import CertificationsImg from "../assets/side-imgs/Certifications.png";
import "./About.css";

const About = () => {
  const theme = useTheme();
  const educationDetails = [
    { title: "SSLC", school: "M.CT.RM.Ramanathan Chettiar Higher Secondary School, Kulipirai.", year: "2017-2018", score: "75.80%" },
    { title: "HSC", school: "M.CT.RM.Ramanathan Chettiar Higher Secondary School, Kulipirai.", year: "2019-2020", score: "65.66%" },
    { title: "B.E - Computer Science and Engineering.", school: "Mahath amma institute of Engineering and Technology, Ariyur.", year: "2020-2024", score: "73.20%" }
  ];

  const skills = ["HTML", "CSS", "JavaScript","React Js", "Bootstrap", "Tailwind","Node Js","C++", "Git", "Communication"];

  const strengths = ["Self-Confidence", "Self-learning", "Punctuality", "Teamwork"];

  const certifications = [
    { title: "Big-Data", issuer: "Veranda", link: "https://drive.google.com/file/d/1v7H_gwrsQE84bzOfVCcKWDZ410EQzEUh/view?usp=drive_link" },
    { title: "AI Era ", issuer: "Sudharsan College", link: "https://drive.google.com/file/d/1A9uhVx2hBW-w_nJufCnSNdAh0LA-AV19/view?usp=drive_link" },
    { title: "Network-Engineering ", issuer: "Cisco", link: "https://drive.google.com/file/d/1AFhFGhR1WSFzeXxZYOSiGv_GFbpDFWJK/view?usp=drive_link" },
    { title: "Block-Chain ", issuer: "SmartBridge Engineering", link: "https://drive.google.com/file/d/1ALH-MaE-0_xZWOFB2J2tJv0sPxGJ46HT/view?usp=drive_link" },
    { title: "Iot ", issuer: "TehentiveAcademy", link: "https://drive.google.com/file/d/1ATdBY4KWz_kdQkE02vTiUX9qYf9K0HXt/view?usp=drive_link" },
  ];

  return (
    <div className='about-container' id='about'>
      <h2 data-aos="fade-right">ABOUT</h2>

      <div className="education-container">
        <div className="education">
          <h2 data-aos="fade-right">Education</h2>
          <ul>
            {educationDetails.map((edu, idx) => (
              <div key={idx} className={edu.title.toLowerCase()} data-aos="fade-right">
                <li><h3>{edu.title}</h3></li>
                <p>{edu.school}</p>
                <p>{edu.year} - {edu.score}</p>
              </div>
            ))}
          </ul>
        </div>
        <div className="edu-img" data-aos="zoom-in-left">
          <img src={EducationImg} alt="Education" />
        </div>
      </div>

      <div className="skills-container">
        <h2 data-aos="fade-right">Skills</h2>
        <div className='skills-grid'>
          {skills.map((skill, idx) => <div key={idx} className='grid-item' data-aos="fade-right">{skill}</div>)}
        </div>
      </div>

      <div className="strengths-container">
        <h2 data-aos="fade-right">Strengths</h2>
        <div className='strengths-grid' >
          {strengths.map((strength, idx) => <div key={idx} className='grid-item' data-aos="fade-right">{strength}</div>)}
        </div>
      </div>

      <div className="certificate-container">
        <div className="certifications">
          <h2 data-aos="fade-right">Certifications</h2>
          <ol>
            {certifications.map((cert, idx) => (
              <div key={idx} className="certificates">
                <li data-aos="fade-right"><b>{cert.title}</b> Certification from <b>{cert.issuer}</b></li>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" data-aos="fade-right">Click to View</a>
              </div>
            ))}
          </ol>
        </div>
        <div className="certify-img" data-aos="zoom-in-left">
          <img src={CertificationsImg} alt="Certifications" />
        </div>
      </div>
    </div>
  );
};

export default About;
