import React from 'react';
import { Mail, Linkedin, Dribbble } from 'lucide-react';
import { SiTiktok } from "react-icons/si";
import './Footer.css';
import { useTranslation, Trans } from 'react-i18next';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  useTranslation();
  
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4 md:px-14">
        <div className="footer-grid">
          <div className="footer-about">
            <a href="/" aria-label="ZSF Logo">
              <img src="/zsf-logo-white.svg" alt="ZSF Logo" className="footer-logo" width={70} height={25} />
            </a>
            <p className="footer-text">
              <Trans i18nKey="footer.footer-text">Professional web development services focused on creating beautiful, 
                functional, and user-friendly websites for businesses of all sizes.</Trans>
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/zsolt-farnas/" aria-label="ZSF Linkedin Profile" className="footer-social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://dribbble.com/zsoltfarnas" aria-label="Dribbble Profile" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <Dribbble size={20} />
              </a>
              <a href="https://www.tiktok.com/@zsfstudio" aria-label="TikTok Profile" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                <SiTiktok size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-title"><Trans i18nKey="footer.quick-links">Quick Links</Trans></h3>
            <ul className="footer-menu">
              <li>
                <a href="#services" className="footer-menu-link">
                  <Trans i18nKey="navbar.services">Services</Trans>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer-menu-link">
                  <Trans i18nKey="navbar.portfolio">Portfolio</Trans>
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-menu-link">
                  <Trans i18nKey="navbar.contact">Contact</Trans>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-title">
              <Trans i18nKey="footer.contact-info">Contact Info</Trans>
            </h3>
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
            © {currentYear} zsoltfarnas.com. <Trans i18nKey="footer.copyright">All rights reserved.</Trans>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
