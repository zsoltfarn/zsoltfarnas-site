import React from 'react';
import { ExternalLink } from 'lucide-react';

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
  onMouseLeave,
  isHovered
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 transition-transform duration-300 group-hover:translate-y-0">
        <span className="inline-block px-3 py-1 text-sm bg-teal-600 rounded-full mb-3">
          {item.category}
        </span>
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-white/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium hover:text-teal-400 transition-colors duration-300"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;