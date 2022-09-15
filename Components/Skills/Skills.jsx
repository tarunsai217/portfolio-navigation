import * as React from 'react';
import './Skills.scss';
import SkillItem from './Components/SkillItem';
import html5 from './Assets/html5.svg';
export default function Skills() {
  const skillItems = [{ name: 'HTML 5', img: html5 }];
  return (
    <div>
      <h1>Skills</h1>
      {skillItems.map((item, index) => {
        return <SkillItem item={item} key={index} />;
      })}
    </div>
  );
}
