import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import PortfolioItem from './PortfolioItem';
import './Portfolio.css';

// Portfolio data
import realEstate397 from '../img/real-estate-397x256.webp';
import realEstate794 from '../img/real-estate-794x512.webp';
import realEstate1191 from '../img/real-estate-1191x767.webp';
import realEstate1460 from '../img/real-estate-1460x941.webp';
import realEstateOriginal from '../img/real-estate.webp';

import fashion397 from '../img/fashion-397x256.webp';
import fashion794 from '../img/fashion-794x512.webp';
import fashion1191 from '../img/fashion-1191x767.webp';
import fashion1460 from '../img/fashion-1460x941.webp';
import fashionOriginal from '../img/fashion.webp';

import restaurant397 from '../img/restaurant-397x256.webp';
import restaurant794 from '../img/restaurant-794x512.webp';
import restaurant1191 from '../img/restaurant-1191x767.webp';
import restaurant1460 from '../img/restaurant-1460x941.webp';
import restaurantOriginal from '../img/restaurant.webp';

import healthcare397 from '../img/healthcare-397x256.webp';
import healthcare794 from '../img/healthcare-794x512.webp';
import healthcare1191 from '../img/healthcare-1191x767.webp';
import healthcare1460 from '../img/healthcare-1460x941.webp';
import healthcareOriginal from '../img/healthcare.webp';

import travel397 from '../img/travel-397x256.webp';
import travel794 from '../img/travel-794x512.webp';
import travel1191 from '../img/travel-1191x767.webp';
import travel1460 from '../img/travel-1460x941.webp';
import travelOriginal from '../img/travel.webp';

import corporate397 from '../img/corporate-397x256.webp';
import corporate794 from '../img/corporate-794x512.webp';
import corporate1191 from '../img/corporate-1191x767.webp';
import corporate1460 from '../img/corporate-1460x941.webp';
import corporateOriginal from '../img/corporate.webp';

const portfolioData = [
  {
    id: 1,
    title: 'Luxury Real Estate Platform',
    category: 'Web Development',
    image: realEstateOriginal,
    imageSet: [
      { src: realEstate397, width: 397 },
      { src: realEstate794, width: 794 },
      { src: realEstate1191, width: 1191 },
      { src: realEstate1460, width: 1460 }
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'A premium real estate platform with advanced property filtering, virtual tours.'
  },
  {
    id: 2,
    title: 'Fashion E-commerce Store',
    category: 'E-commerce',
    image: fashionOriginal,
    imageSet: [
      { src: fashion397, width: 397 },
      { src: fashion794, width: 794 },
      { src: fashion1191, width: 1191 },
      { src: fashion1460, width: 1460 }
    ],
    tags: ['WooCommerce', 'WordPress', 'Custom Theme'],
    description: 'A high-converting fashion store with custom product filters.'
  },
  {
    id: 3,
    title: 'Restaurant Booking System',
    category: 'WordPress',
    image: restaurantOriginal,
    imageSet: [
      { src: restaurant397, width: 397 },
      { src: restaurant794, width: 794 },
      { src: restaurant1191, width: 1191 },
      { src: restaurant1460, width: 1460 }
    ],
    tags: ['WordPress', 'Custom Plugin', 'API Integration'],
    description: 'An automated reservation system with table management and SMS notifications.'
  },
  {
    id: 4,
    title: 'Healthcare Provider Portal',
    category: 'Web Development',
    image: healthcareOriginal,
    imageSet: [
      { src: healthcare397, width: 397 },
      { src: healthcare794, width: 794 },
      { src: healthcare1191, width: 1191 },
      { src: healthcare1460, width: 1460 }
    ],
    tags: ['React', 'TypeScript', 'Firebase'],
    description: 'A secure patient management system with appointment scheduling.'
  },
  {
    id: 5,
    title: 'Travel Blog & Booking',
    category: 'WordPress',
    image: travelOriginal,
    imageSet: [
      { src: travel397, width: 397 },
      { src: travel794, width: 794 },
      { src: travel1191, width: 1191 },
      { src: travel1460, width: 1460 }
    ],
    tags: ['WordPress', 'Custom Theme', 'Elementor'],
    description: 'A visually stunning travel blog with integrated booking capabilities and user reviews.'
  },
  {
    id: 6,
    title: 'Corporate Dashboard',
    category: 'Web Development',
    image: corporateOriginal,
    imageSet: [
      { src: corporate397, width: 397 },
      { src: corporate794, width: 794 },
      { src: corporate1191, width: 1191 },
      { src: corporate1460, width: 1460 }
    ],
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    description: 'A comprehensive analytics dashboard for business intelligence.'
  }
];

// Filter categories
const categories = ['All', 'Web Development', 'WordPress', 'E-commerce'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Our Portfolio</h2>
          <div className="portfolio-underline"></div>
          <p className="portfolio-description">
            Explore our recent projects and see how we've helped businesses achieve 
            their digital goals.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`portfolio-filter-btn${activeCategory === category ? ' active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <PortfolioItem 
              key={item.id}
              item={item}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              isHovered={hoveredItem === item.id}
            />
          ))}
        </div>

        <div className="portfolio-viewall">
          <a 
            href="#" 
            className="portfolio-viewall-link"
          >
            View All Projects
            <ExternalLink size={18} className="portfolio-viewall-link-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;