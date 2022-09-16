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
      img: 'https://i.ibb.co/ns4QR7d/sample-image.png',
      skills: ['VUE3', 'API', 'VITE'],
    },
    {
      name: 'Anime Tracker',
      description:
        "An Anime tracker app where you can track the anime episodes you're currently watching. Made using Vue3",
      gitLink: '',
      urlLink: '',
      img: 'https://i.ibb.co/ns4QR7d/sample-image.png',
      skills: ['VUE3', 'API', 'VITE'],
    },
    {
      name: 'Anime Tracker',
      description:
        "An Anime tracker app where you can track the anime episodes you're currently watching. Made using Vue3",
      gitLink: '',
      urlLink: '',
      img: 'https://i.ibb.co/ns4QR7d/sample-image.png',
      skills: ['VUE3', 'API', 'VITE'],
    },
    {
      name: 'Anime Tracker',
      description:
        "An Anime tracker app where you can track the anime episodes you're currently watching. Made using Vue3",
      gitLink: '',
      urlLink: '',
      img: 'https://i.ibb.co/ns4QR7d/sample-image.png',
      skills: ['VUE3', 'API', 'VITE'],
    },
    {
      name: 'Anime Tracker',
      description:
        "An Anime tracker app where you can track the anime episodes you're currently watching. Made using Vue3",
      gitLink: '',
      urlLink: '',
      img: 'https://i.ibb.co/ns4QR7d/sample-image.png',
      skills: ['VUE3', 'API', 'VITE'],
    },
  ];
  return (
    <div className="projects-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-items">
        {projectItems.map((item, index) => {
          return <ProjectItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
