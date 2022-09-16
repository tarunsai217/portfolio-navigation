import React, { useState } from 'react';
import './TopNav.scss';
import NavItem from './Components/NavItem';
import MenuIcon from './Assets/MenuIcon';
import CloseIcon from './Assets/CloseIcon';
export default function TopNav() {
  const navItems = [
    { name: 'HOME', link: 'home' },
    { name: 'SKILLS', link: 'skills' },
    { name: 'PROJECTS', link: 'projects' },
    { name: 'EXPERIENCE', link: 'experience' },
    { name: 'CONTACT', link: 'contact' },
  ];

  const [isExpanded, setIsExpanded] = useState(false);
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
      <div className="menu">
        {!isExpanded && (
          <div
            onClick={() => {
              setIsExpanded(true);
            }}
            className="icon-wrapper"
          >
            <MenuIcon />
          </div>
        )}
        {isExpanded && (
          <div className="expanded-menu">
            <div
              onClick={() => {
                setIsExpanded(false);
              }}
              className="close-icon-wrapper"
            >
              <CloseIcon />
            </div>

            <ul>
              {navItems.map((navItem) => {
                return (
                  <li>
                    <a href={`#${navItem.link}`}>{navItem.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
