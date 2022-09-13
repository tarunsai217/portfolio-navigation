import * as React from 'react';
import './SkillItem.scss';

export default function SkillItem({ item }) {
  const { name, img } = item;
  return (
    <div className="skill-item">
      <img src={img} />
      <span>{name}</span>
    </div>
  );
}
