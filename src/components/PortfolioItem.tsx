import React from 'react';
import { ExternalLink } from 'lucide-react';
import './PortfolioItem.css';

interface PortfolioItemProps {
  item: {
    title: string;
    category: string;
    image: string;
    tags: string[];
    description: string;
  };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isHovered: boolean;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  item,
  onMouseEnter,
  onMouseLeave}) => {
  return (
    <div
      className="portfolio-item is-hovered"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="portfolio-item-image-wrapper">
        <img
          src={item.image}
          alt={item.title}
          className="portfolio-item-image"
          loading="lazy"
        />
        <div className="portfolio-item-gradient" />
      </div>
      <div className="portfolio-item-content">
        <span className="portfolio-item-category">
          {item.category}
        </span>
        <h3 className="portfolio-item-title">{item.title}</h3>
        <p className="portfolio-item-desc">
          {item.description}
        </p>
        <div className="portfolio-item-tags">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="portfolio-item-tag"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="portfolio-item-link"
        >
          View Project <ExternalLink size={16} className="portfolio-item-link-icon" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;

