import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from './ui/Link';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-top'}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="#home" className="flex items-center">
            <img
              src="/logo.svg"
              alt="ZSF Studio Logo"
              className={`logo ${isScrolled ? 'logo-scrolled' : ''}`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`navbar-link font-medium transition-colors duration-200`}
            >
              {item}
            </Link>
          ))}
          <button className="get-started-btn">
            Get Started
            <ChevronRight size={18} className="get-started-chevron" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 py-5 space-y-4 shadow-lg">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block font-medium text-gray-700 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="get-started-btn">
              Get Started
              <ChevronRight size={18} className="get-started-chevron" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;