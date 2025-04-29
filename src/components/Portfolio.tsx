import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import PortfolioItem from './PortfolioItem';
import './Portfolio.css';

// Portfolio data
const portfolioData = [
  {
    id: 1,
    title: 'Luxury Real Estate Platform',
    category: 'Web Development',
    image: 'real-estate.webp',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'A premium real estate platform with advanced property filtering, virtual tours.'
  },
  {
    id: 2,
    title: 'Fashion E-commerce Store',
    category: 'E-commerce',
    image: 'fashion.webp',
    tags: ['WooCommerce', 'WordPress', 'Custom Theme'],
    description: 'A high-converting fashion store with custom product filters.'
  },
  {
    id: 3,
    title: 'Restaurant Booking System',
    category: 'WordPress',
    image: 'restaurant.webp',
    tags: ['WordPress', 'Custom Plugin', 'API Integration'],
    description: 'An automated reservation system with table management and SMS notifications.'
  },
  {
    id: 4,
    title: 'Healthcare Provider Portal',
    category: 'Web Development',
    image: 'healthcare.webp',
    tags: ['React', 'TypeScript', 'Firebase'],
    description: 'A secure patient management system with appointment scheduling.'
  },
  {
    id: 5,
    title: 'Travel Blog & Booking',
    category: 'WordPress',
    image: 'travel.webp',
    tags: ['WordPress', 'Custom Theme', 'Elementor'],
    description: 'A visually stunning travel blog with integrated booking capabilities and user reviews.'
  },
  {
    id: 6,
    title: 'Corporate Dashboard',
    category: 'Web Development',
    image: 'corporate.webp',
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