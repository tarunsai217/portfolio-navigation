import * as React from 'react';
import './style.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import TopNav from './Components/TopNav';

export default function App() {
  return (
    <div>
      <TopNav />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}
