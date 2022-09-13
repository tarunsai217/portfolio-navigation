import * as React from 'react';
import './Skills.scss';
import SkillItem from './Components/SkillItem';
export default function Skills() {
  const skillItems = [{ name: 'HTML' }];
  return (
    <div>
      <h1>Skills</h1>
      {skillItems.map((item, index) => {
        return <SkillItem item={item} key={index} />;
      })}
    </div>
  );
}
