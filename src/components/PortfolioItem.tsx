import React from 'react';
import { ExternalLink } from 'lucide-react';
import './PortfolioItem.css';
import { useTranslation } from 'react-i18next';

interface ImageSet {
  src: string;
  width: number;
}

interface PortfolioItemProps {
  item: {
    title: string;
    category: string;
    image: string;
    imageSet: ImageSet[];
    tags: string[];
    description: string;
    link?: string;  // Added this line
    fit?: 'cover' | 'contain';
  };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isHovered: boolean;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  item,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { t } = useTranslation();
  // Generate srcSet string from imageSet
  const srcSet = item.imageSet
    .map((img) => `${img.src} ${img.width}w`)
    .join(', ');

  // Optional: tweak sizes to match your layout breakpoints
  const sizes =
    '(max-width: 400px) 397px, (max-width: 800px) 794px, (max-width: 1200px) 1191px, 1460px';

  return (
    <div
      className="portfolio-item is-hovered"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="portfolio-item-image-wrapper">
        <img
          src={item.image} // Fallback
          srcSet={srcSet}
          sizes={sizes}
          alt={item.title}
          className="portfolio-item-image"
          style={item.fit === 'contain' ? { objectFit: 'contain', height: '100%', transform: 'none', backgroundColor: '#000' } : undefined}
          loading="lazy"
        />
        <div className="portfolio-item-gradient" />
      </div>
      <div className="portfolio-item-content">
        <span className="portfolio-item-category">{item.category}</span>
        <h3 className="portfolio-item-title">{item.title}</h3>
        <p className="portfolio-item-desc">{item.description}</p>
        <div className="portfolio-item-tags">
          {item.tags.map((tag, index) => (
            <span key={index} className="portfolio-item-tag">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={item.link || "#"}
          className="portfolio-item-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('portfolio.viewProject')}
          <ExternalLink size={16} className="portfolio-item-link-icon" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
