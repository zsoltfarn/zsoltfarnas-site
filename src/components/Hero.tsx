import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

import heroBg397 from '../img/background-397x256.webp';
import heroBg794 from '../img/background-794x512.webp';
import heroBg1191 from '../img/background-1191x767.webp';
import heroBg1460 from '../img/background-1460x941.webp';
import { Link } from './ui/Link';
import { useTranslation, Trans } from 'react-i18next';

const Hero: React.FC = () => {
  // Remove unused 't' since we're using Trans component directly
  useTranslation();
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
      <div className="hero-bg">
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet={heroBg397}
          />
          <source
            media="(max-width: 1024px)"
            srcSet={heroBg794}
          />
          <source
            media="(max-width: 1400px)"
            srcSet={heroBg1191}
          />
          <img
            src={heroBg1460}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: -1 }}
            aria-hidden="true"
          />
        </picture>
      </div>

      <div className="hero-container">
        <div ref={headerRef}>
          <h1 className="hero-title">
            <Trans i18nKey="hero.title">
              Crafting Digital Experiences That{' '}
              <span className="hero-title-highlight">Transform</span> Businesses
            </Trans>
          </h1>

          <p className="hero-desc">
            <Trans i18nKey="hero.desc">
              We design stunning websites, build high-performance WordPress solutions, and deliver expert SEO optimization services — all aimed at driving growth, engaging your audience, and elevating your brand in the competitive digital world.
            </Trans>
          </p>

          <div className="hero-btn-row">
            <button className="hero-btn-primary">
              <Trans i18nKey="hero.viewWork">View Our Work</Trans>
              <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </button>
            <Link href="#contact" className="hero-btn-secondary">
              <Trans i18nKey="hero.getInTouch">Get in Touch</Trans>
            </Link>
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
