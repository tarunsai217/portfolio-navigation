import * as React from 'react';
import './NavItem.scss';

export default function NavItem({ item }) {
  const { name, link } = item;
  return (
    <li>
      <div />
      <a href={`#${link}`}>{name}</a>
    </li>
  );
}
