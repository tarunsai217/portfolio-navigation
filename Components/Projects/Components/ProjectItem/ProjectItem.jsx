import * as React from 'react';
import './ProjectItem.scss';

export default function ProjectItem({ item }) {
  const { name, description, gitLink, urlLink, img, skills } = item;
  return (
    <div className="project-item">
      <img src={img} />
      <span className="skill-name">{name}</span>
      <span className="description">{description}</span>
      <div className="links">
        <a></a>
        <a></a>
      </div>
      <div className="skills">
        {skills.map((skill, index) => {
          return (
            <span className="skill-name" key={index}>
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}
