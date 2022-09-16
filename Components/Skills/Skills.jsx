import * as React from 'react';
import './Skills.scss';
import SkillItem from './Components/SkillItem';
import {
  html5,
  css3,
  js,
  sass,
  react,
  redux,
  tailwind,
  bootstrap,
} from './Assets';

export default function Skills() {
  const skillItems = [
    { name: 'HTML 5', img: html5 },
    { name: 'CSS 3', img: css3 },
    { name: 'JS', img: js },
    { name: 'sass', img: sass },
    { name: 'react', img: react },
    { name: 'redux', img: redux },
    { name: 'tailwind', img: tailwind },
    { name: 'bootstrap', img: bootstrap },
    { name: 'node js', img: sass },
    { name: 'express', img: sass },
    { name: 'firebase', img: sass },
    { name: 'socket io', img: sass },
  ];
  return (
    <div className="skills-container">
      <h1 className="skill-heading">Skills</h1>
      <div className="skill-items">
        {skillItems.map((item, index) => {
          return <SkillItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
