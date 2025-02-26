import React from 'react';
import ExpImg from "../assets/side-imgs/Experience.png";
import "./Experience.css";

const Experience = () => {
  const calculateExperience = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    return `${years} years and ${months} months`;
  };

  const experience = calculateExperience("2024-07-1");

  const workExperience = [
    { title: "Technical Course Trainer", tasks: "TechentiveAcademy", period: "July 2024 - September 2024" },
  ];

  const internships = [
    { title: "Software Developer", company: "IMFU Tech, Pudukkottai.", period: "February 2024 - March 2024" },
  ];

  return (
    <div className='exp-container' id='experience'>
      <h2 data-aos="fade-right">EXPERIENCE</h2>

      <div className="work-exp">
        <div className="work" data-aos="fade-right">
          <h2>Work Experience</h2>
          <p>{experience}</p>
          <ul>
            {workExperience.map((work, idx) => (
              <div key={idx} className={`company${idx + 1}`} data-aos="fade-right">
                <li><h3>{work.title}</h3></li>
                <p>{work.tasks}</p>
                <p>{work.period}</p>
              </div>
            ))}
          </ul>
        </div>
        <div className="exp-img" data-aos="zoom-in-left">
          <img src={ExpImg} alt="Experience" />
        </div>
      </div>

      <div className="internships">
        <h2 data-aos="fade-right">Internships</h2>
        <ul>
          {internships.map((intern, idx) => (
            <div key={idx} className={`intern${idx + 1}`} data-aos="fade-right">
              <li><h3>{intern.title}</h3></li>
              <p>{intern.company}</p>
              <p>{intern.period}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
