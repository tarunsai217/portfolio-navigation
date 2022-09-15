import * as React from 'react';
import './Skills.scss';
import SkillItem from './Components/SkillItem';
import { html5, css3, js, sass } from './Assets';

export default function Skills() {
  const skillItems = [
    { name: 'HTML 5', img: html5 },
    { name: 'CSS 3', img: css3 },
    { name: 'JS', img: js },
    { name: 'sass', img: sass },
  ];
  return (
    <div>
      <h1>Skills</h1>
      {skillItems.map((item, index) => {
        return <SkillItem item={item} key={index} />;
      })}
    </div>
  );
}
