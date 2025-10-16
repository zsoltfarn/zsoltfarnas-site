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


// Marquardt project image
import marquardtMain from '../projects/marquardt/image/main-pic.jpg';

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
    id: 5,
    title: t('portfolio.items.herrtrans.title'),
    category: t('portfolio.items.herrtrans.category'),
    image: 'https://herrtrans.hu/favicon.ico',
    imageSet: [
      { src: 'https://herrtrans.hu/favicon.ico', width: 256 }
    ],
    tags: t('portfolio.items.herrtrans.tags', { returnObjects: true }) as string[],
    description: t('portfolio.items.herrtrans.description'),
    link: 'https://herrtrans.hu/'
  },
  {
    id: 4,
    title: t('portfolio.items.marquardt.title'),
    category: t('portfolio.items.marquardt.category'),
    image: marquardtMain,
    imageSet: [
      { src: marquardtMain, width: 794 }
    ],
    tags: t('portfolio.items.marquardt.tags', { returnObjects: true }) as string[],
    description: t('portfolio.items.marquardt.description'),
    // Direct link to the static page in development; consider moving to public/ for production builds
    link: '/src/projects/marquardt/index.html'
  },
  {
    id: 6,
    title: t('portfolio.items.heera.title'),
    category: t('portfolio.items.heera.category'),
    image: 'https://www.heera.hu/_next/image?url=%2Fimages%2Fhero-photo.jpeg&w=640&q=75',
    imageSet: [
      { src: 'https://www.heera.hu/_next/image?url=%2Fimages%2Fhero-photo.jpeg&w=640&q=75', width: 256 }
    ],
    tags: t('portfolio.items.heera.tags', { returnObjects: true }) as string[],
    description: t('portfolio.items.heera.description'),
    link: 'https://heera.hu/'
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