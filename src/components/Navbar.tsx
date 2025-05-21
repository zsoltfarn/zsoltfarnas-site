import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from './ui/Link';
import './Navbar.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation, Trans } from 'react-i18next';
import { useLocation } from 'react-router-dom';

// Define the custom hook
const useNavbarStyle = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  // Ensure the path comparison is accurate, especially with trailing slashes
  const isLogCalculator = location.pathname === '/log-calculator' || location.pathname === '/log-calculator/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { isScrolled, isLogCalculator };
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Use the custom hook
  const { isScrolled, isLogCalculator } = useNavbarStyle();
  useTranslation();

  // The original useEffect for scrolling and isDarkTextPage logic is now in the hook

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-top'}`}
      style={{ color: isLogCalculator && !isScrolled ? '#000' : '#fff' }}
    >
      <div className="container mx-auto px-4 md:px-14 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src={isLogCalculator ? (isScrolled ? "/zsf-logo-white.svg" : "/zsf-logo-blue.svg") : "/zsf-logo-white.svg"}
              alt="ZSF Studio Logo"
              className={`logo`}
            />
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {['navbar.home', 'navbar.services', 'navbar.portfolio', 'navbar.about', 'navbar.contact'].map((key, idx) => (
            <Link 
              key={key}
              href={idx === 0 ? '/' : `#${['home', 'services', 'portfolio', 'about', 'contact'][idx]}`}
              className={`navbar-link font-medium transition-colors duration-200`}
            >
              <Trans i18nKey={key}>
                {['Home', 'Services', 'Portfolio', 'About', 'Contact'][idx]}
              </Trans>
            </Link>
          ))}
          <button className="get-started-btn">
            <Trans i18nKey="navbar.getstarted">Get Started</Trans>
            <ChevronRight size={18} className="get-started-chevron" />
          </button>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} color="#fff" className="text-white" />
          ) : (
            <Menu size={24} color="#fff" className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile md:hidden bg-white">
          <div className="px-4 py-4 space-y-5 shadow-lg">
            {['navbar.home', 'navbar.services', 'navbar.portfolio', 'navbar.about', 'navbar.contact'].map((key, idx) => (
              <Link 
                key={key}
                href={idx === 3 ? '/about' : `#${['home', 'services', 'portfolio', 'about', 'contact'][idx]}`}
                className="block font-medium text-gray-700 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <Trans i18nKey={key}>
                  {['Home', 'Services', 'Portfolio', 'About', 'Contact'][idx]}
                </Trans>
              </Link>
            ))}
            <button className="get-started-btn">
              <Trans i18nKey="navbar.getstarted">Get Started</Trans>
              <ChevronRight size={18} className="get-started-chevron" />
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;