import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import PortfolioItem from './PortfolioItem';
import './Portfolio.css';
import { useTranslation } from 'react-i18next';

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

const Portfolio: React.FC = () => {
const { t } = useTranslation();

const portfolioData = [
  {
    id: 1,
    title: t('portfolio.items.logCalculator.title'),
    category: t('portfolio.items.logCalculator.category'),
    image: realEstateOriginal,
    imageSet: [
      { src: realEstate397, width: 397 },
      { src: realEstate794, width: 794 },
      { src: realEstate1191, width: 1191 },
      { src: realEstate1460, width: 1460 }
    ],
    tags: t('portfolio.items.logCalculator.tags', { returnObjects: true }) as string[],
    description: t('portfolio.items.logCalculator.description'),
    link: '/log-calculator/'
  },
  {
    id: 2,
    title: t('portfolio.items.fashionStore.title'),
    category: t('portfolio.items.fashionStore.category'),
    image: fashionOriginal,
    imageSet: [
      { src: fashion397, width: 397 },
      { src: fashion794, width: 794 },
      { src: fashion1191, width: 1191 },
      { src: fashion1460, width: 1460 }
    ],
    tags: t('portfolio.items.fashionStore.tags', { returnObjects: true }) as string[],
    description: t('portfolio.items.fashionStore.description'),
    link: '#'
  },
  {
    id: 3,
    title: t('portfolio.items.restaurantBooking.title'),
    category: t('portfolio.items.restaurantBooking.category'),
    image: restaurantOriginal,
    imageSet: [
      { src: restaurant397, width: 397 },
      { src: restaurant794, width: 794 },
      { src: restaurant1191, width: 1191 },
      { src: restaurant1460, width: 1460 }
    ],
    tags: t('portfolio.items.restaurantBooking.tags', { returnObjects: true }) as string[],
    description: t('portfolio.items.restaurantBooking.description'),
    link: '#'
  },
  
];

// Remove categories and activeCategory state
// const categories = [
//   t('portfolio.categories.all'),
//   t('portfolio.categories.webdev'),
//   t('portfolio.categories.wordpress'),
//   t('portfolio.categories.ecommerce')
// ];

// const [activeCategory, setActiveCategory] = useState(categories[0]);
const [hoveredItem, setHoveredItem] = useState<number | null>(null);

// Show all items, no filtering
const filteredItems = portfolioData;

return (
  <section id="portfolio" className="portfolio-section">
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h2 className="portfolio-title">{t('portfolio.title')}</h2>
        <div className="portfolio-underline"></div>
        <p className="portfolio-description">
          {t('portfolio.description')}
        </p>
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
          {t('portfolio.viewAll')}
          <ExternalLink size={18} className="portfolio-viewall-link-icon" />
        </a>
      </div>
    </div>
  </section>
);
}; 

export default Portfolio;