import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <a href="/" aria-label="ZSF Logo">
              <img src="/zsf-logo-white.svg" alt="ZSF Logo" className="footer-logo" width={70} height={25} />
            </a>
            <p className="footer-text">
              Professional web development services focused on creating beautiful, 
              functional, and user-friendly websites for businesses of all sizes.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/" aria-label="ZSF Linkedin Profile" className="footer-social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-menu">
              <li><a href="#services" className="footer-menu-link">Services</a></li>
              <li><a href="#portfolio" className="footer-menu-link">Portfolio</a></li>
              <li><a href="#pricing" className="footer-menu-link">Pricing</a></li>
              <li><a href="#contact" className="footer-menu-link">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-title">Contact Info</h3>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <Mail size={18} className="footer-icon" />
                <a href="mailto:info@zsoltfarnas.com" className="footer-contact-link">
                  info@zsoltfarnas.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} zsoltfarnas.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;