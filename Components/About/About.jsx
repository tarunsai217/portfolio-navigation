import * as React from 'react';
import './About.scss';
export default function About() {
  return (
    <div className="about-container">
      <div className="about">
        <h1 className="intro-heading">Hi, I'm Tarun ! </h1>
        <p className="intro-description">
          I'm a passionate <span>Frontend Developer</span>. I love creating
          beautiful, responsive websites using modern techstacks like{' '}
          <span>ReactJs</span> and
          <span> AngularJs</span>.
        </p>
        <a className="resume">Download my Resume</a>
      </div>
      <div className="image">
        <img
          src="https://i.ibb.co/t86Ncz9/Screenshot-2022-09-16-6-17-51-AM.png"
          alt="userimage"
          border="0"
        />
      </div>
    </div>
  );
}
