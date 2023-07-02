import React from 'react';
import './about.css'
import M from './m.jpg'

const About = () => {
  return (
    <section id="about">

<h2>About Me</h2>
       <img src={M} alt="Profile Picture" />
    <div className="about-content">
      
       
      </div>
      <div className="about-text">
      
        <p>
          Hi, I'm Amit Kumar. I am a passionate and dedicated Front-End Developer with 2 years of experience in this position. I have a strong background in Front-End Technologies.
        </p>
        <p>
          I thrive on challenges and enjoy working on various types of projects. My goal is to deliver high-quality work that exceeds client expectations and contributes to the success of the projects I'm involved in. I am constantly seeking opportunities to learn and grow in my field.
        </p>
        <p>
          In my free time, I enjoy doing yoga and listening to music. I believe in continuous improvement and staying up-to-date with the latest trends and technologies in this field.
        </p>
      </div>
    
  </section>
  
    
  );
};

export default About;
