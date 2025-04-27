import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [hideScrollIndicator, setHideScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      setHideScrollIndicator(rect.top <= 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" />

      <div className="hero-container">
        <div ref={headerRef}>
          <h1 className="hero-title">
            Crafting Digital Experiences That{' '}
            <span className="hero-title-highlight">Transform</span> Businesses
          </h1>

          <p className="hero-desc">
            We design stunning websites, build high-performance WordPress solutions, and deliver expert SEO optimization services — all aimed at driving growth, engaging your audience, and elevating your brand in the competitive digital world.
          </p>

          <div className="hero-btn-row">
            <button className="hero-btn-primary">
              View Our Work
              <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </button>
            <button className="hero-btn-secondary">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Fixed and hide on scroll */}
      {!hideScrollIndicator && (
        <div className="hero-scroll-indicator" style={{
          position: 'fixed',
          left: '50%',
          bottom: '2rem',
          transform: 'translateX(-50%)',
          zIndex: 1000
        }}>
          <div className="hero-scroll-outer">
            <div className="hero-scroll-inner" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
