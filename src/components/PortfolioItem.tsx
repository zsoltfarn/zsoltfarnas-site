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

function generateSrcSet(imageName: string) {
  const sizes = ['397x256', '794x512', '1191x767', '1460x941'];

  const extensionMatch = imageName.match(/\.(webp|jpeg|jpg|png)$/i);

  if (!extensionMatch) {
    console.error('Invalid image extension!', imageName);
    return '';
  }

  const extension = extensionMatch[0]; // Example: '.jpeg'
  const baseName = imageName.replace(extension, ''); // remove the extension

  return sizes
    .map(size => `/images/${baseName}-${size}${extension} ${size.split('x')[0]}w`)
    .join(', ');
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
          src={`/images/${item.image}`}
          alt={item.title}
          className="portfolio-item-image"
          loading="lazy"
          srcSet={generateSrcSet(item.image)}
          sizes="(max-width: 600px) 397px, (max-width: 1024px) 794px, (max-width: 1400px) 1191px, 1460px"
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

