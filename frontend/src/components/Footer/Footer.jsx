import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import facebook_Icon from '../../assets/facebook_icon.png';
import twitter_Icon from '../../assets/twitter_icon.png';
import linkedin_Icon from '../../assets/linkedin_icon.png';

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.jhead} alt="Logo" className="jhead" width="100" height="auto" />
          <p>Your favorite food, delivered fast.</p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook_Icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter_Icon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_Icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>📞 Contact: +1-825-575</li>
            <li>📧 Email: <a href="mailto:jalapenodelivry@gmail.com">jalapenodelivry@gmail.com</a></li>
          </ul>

          {/* What's New section */}
          <div className="whats-new">
            <h3>🌶️ What's New?</h3>
            <p>Have a spicy twist or a secret recipe you’d love to share?</p>
            <p><strong>You can now submit your recipe secrets to us</strong> and get featured on our platform!</p>
            <p>📧 Email us at: <a href="mailto:jalapenodelivry@gmail.com">jalapenodelivry@gmail.com</a></p>
          </div>
        </div>
      </div>

      <hr />
      <p>&copy; 2025 Jalapeño. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
