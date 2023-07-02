import React from 'react'
import './contact.css'
import GI from './gi.png'
import INS from './ins.jpg'
import LI from './li.png'
import TW from './tww.jpg'

const Contact = () => {
  return (
    <section id="contact">
    <div class="content">
      <h2>Contact</h2>
      <p class="contact-description">Feel free to get in touch with me for any inquiries or collaboration
        opportunities.</p>
      <div class="contact-info">
        <div class="contact-item">
          <h3>Email :</h3>
          <p class="contact-details">amit192400@gmail.com</p>
        </div>
        <div class="contact-item">
          <h3>Phone :</h3>
          <p class="contact-details">+918340616588</p>
        </div>
        <div class="contact-item">
          <h3>Social Media :</h3>
          <ul class="social-media-links">
            <li><a href="https://linkedin.com/in/amit1924" target="_blank"><img src={LI} alt="LinkedIn"/></a>
            </li>
            <li><a href="#" target="_blank"><img src={TW} alt="Twitter"/></a></li>
            <li><a href="https://www.instagram.com/amit_jhaa19/" target="_blank"><img src={INS}
                  alt="Instagram"/></a></li>
            <li><a href="https://www.github.com/amit1924" target="_blank"><img src={GI} alt="Instagram"/></a>
            </li>
          </ul>
          {<iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7195.322456809048!2d85.0943863!3d25.616171100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed579aa9bbc8db%3A0xd4213ab3d2fee555!2sProfessor&#39;s%20Colony%2C%20North%20Shastri%20Nagar%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1688015900444!5m2!1sen!2sin"
            width="100%" height="450" style={{ border: 5}} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="Google Map"></iframe> }
        
        </div>
      </div>
    </div>
  
          {/* Add your map component or iframe here */}
          {/* For example, you can use an iframe to embed a Google Maps */}
          
      
    
  </section>
  
  )
}

export default Contact
