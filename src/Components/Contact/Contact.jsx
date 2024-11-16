import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaShareAltSquare } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="share-section">
       <span className='share-icon'><FaShareAltSquare size={20}/></span> 
       <span>Share this page</span>
        <div className="social-icons">
          <FaFacebookF />
          <FiX />
          <FaLinkedinIn />
          <MdEmail />
        </div>
      </div>

      <div className="contact-content">
        <div className="connect-section">
          <h2>Connect with us</h2>
          <p>We're always looking to connect with those who share an interest in a sustainable future.</p>
          <div className="social-Icons">
            <FaFacebookF size={20} />
            <FiX  size={20}/>
            <FaInstagram  size={20} />
            <FaLinkedinIn  size={20} />
          </div>
        </div>

        <div className="contact-section">
          <h2>Contact us</h2>
          <p>Get in touch with Unilever PLC and specialist teams in our headquarters, or find contacts around the world.</p>
          <button className="contact-button">Contact us <span>▶</span></button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
