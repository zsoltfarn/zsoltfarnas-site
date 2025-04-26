import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" />

      <div className="hero-container">
        <div>
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

      <div className="hero-scroll-indicator">
        <div className="hero-scroll-outer">
          <div className="hero-scroll-inner" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
