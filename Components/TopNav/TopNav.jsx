import * as React from 'react';
import './TopNav.scss';
import NavItem from './Components/NavItem';
export default function TopNav() {
  const navItems = [
    { name: 'HOME', link: 'home' },
    { name: 'SKILLS', link: 'skills' },
    { name: 'PROJECTS', link: 'projects' },
    { name: 'EXPERIENCE', link: 'experience' },
    { name: 'CONTACT', link: 'contact' },
  ];
  return (
    <div className="top-navigation">
      <div className="logo-wrapper">
        <img src="https://i.ibb.co/hL4ZLk8/logo.png" alt="logo" />
      </div>
      <ul className="nav-items">
        {navItems.map((item, index) => {
          return <NavItem item={item} key={index} />;
        })}
      </ul>
    </div>
  );
}
