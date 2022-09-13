import * as React from 'react';
import './Projects.scss';
import ProjectItem from './Components/ProjectItem/ProjectItem.jsx';
export default function Projects() {
  const projectItems = [
    {
      name: 'Anime Tracker',
      description:
        "An Anime tracker app where you can track the anime episodes you're currently watching. Made using Vue3",
      gitLink: '',
      urlLink: '',
      img: '',
      skills: ['VUE3', 'API', 'VITE'],
    },
  ];
  return (
    <div>
      <h1>Projects</h1>
      {projectItems.map((item, index) => {
        return <ProjectItem item={item} key={index} />;
      })}
    </div>
  );
}
