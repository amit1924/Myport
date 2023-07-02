import React from 'react';
import './project.css'

const Project = () => {
  return (
    
    <section id="projects">
   
    <div class="project-item">
    <h2>Bootstrap Project</h2>
        <p>This project is made by using Bootstrap</p>
        <a href="https://amit1924.github.io/Bootstrap_project/#" target="_blank">GitHub Repository</a>
    </div>

    <div class="project-item">
        <h3>My React Website</h3>
        <p>This Website is made up of using react js components</p>
        <a href="https://amit1924.github.io/myreactwebsite/" target="_blank">GitHub Repository</a>
    </div>
    <div class="project-item">
        <h3>My Portfolio</h3>
        <p>This Website is made up of using HTML and CSS</p>
        <a href="https://amit1924.github.io/My_new_portfolio/" target="_blank">GitHub Repository</a>
    </div>
    <div class="project-item">
        <h3>JavaScript Project</h3>
        <p>This Website is made up of using Javascript by fetching weather API</p>
        <a href="https://amit1924.github.io/javascript_project1/" target="_blank">GitHub Repository</a>
    </div>
    <div class="project-item">
        <h3>Wordpress Project</h3>
        <p>This Website is made up of using latest wordpress plugins and themes</p>
        <a href="https://github.com/amit1924/wordpress_project" target="_blank">GitHub Repository</a>
    </div>
</section>
  );
};

export default Project;
