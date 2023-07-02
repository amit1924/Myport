import React from 'react';
import './skills.css';
import BT from './bt.jpg'
import LI from './li.png'
import PY from './py.jpg'
import JS from './js.png'
import WP from './wp.webp'
import HT from './ht.png'
import CSS from './css.webp'
import RE from './re.png'




const Skills = () => {
    
  return (
   
    <section id="skills">
      <div className="content">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <img src={HT} alt="HTML" />
            <h3>HTML</h3>
            <div className="skill-level">
              <div className="skill-fill" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <img src={CSS} alt="CSS" />
            <h3>CSS</h3>
            <div className="skill-level">
              <div className="skill-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <img src={JS} alt="JavaScript" />
            <h3>JavaScript</h3>
            <div className="skill-level">
              <div className="skill-fill" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <img src={PY} alt="Python" />
            <h3>Python</h3>
            <div className="skill-level">
              <div className="skill-fill" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <img src={RE} alt="React" />
            <h3>React</h3>
            <div className="skill-level">
              <div className="skill-fill" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <img src={WP} alt="Wordpress" />
            <h3>Wordpress</h3>
            <div className="skill-level">
              <div className="skill-fill" style={{ width: '80%' }}></div>
            </div>
          </div>
          {/* Add more skill items */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
