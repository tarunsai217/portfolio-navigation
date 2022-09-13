import * as React from 'react';
import './TopNav.scss';
import NavItem from './Components/NavItem';
export default function TopNav() {
  const navItems = [{ name: 'HOME', link: 'home' }];
  return (
    <div>
      <h1>TopNav</h1>
      {navItems.map((item, index) => {
        return <NavItem item={item} key={index} />;
      })}
    </div>
  );
}
