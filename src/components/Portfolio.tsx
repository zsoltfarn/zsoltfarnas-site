import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import PortfolioItem from './PortfolioItem';

// Portfolio data
const portfolioData = [
  {
    id: 1,
    title: 'Luxury Real Estate Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'A premium real estate platform with advanced property filtering, virtual tours, and agent dashboards.'
  },
  {
    id: 2,
    title: 'Fashion E-commerce Store',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['WooCommerce', 'WordPress', 'Custom Theme'],
    description: 'A high-converting fashion store with custom product filters and personalized shopping experience.'
  },
  {
    id: 3,
    title: 'Restaurant Booking System',
    category: 'WordPress',
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['WordPress', 'Custom Plugin', 'API Integration'],
    description: 'An automated reservation system with table management and SMS notifications.'
  },
  {
    id: 4,
    title: 'Healthcare Provider Portal',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['React', 'TypeScript', 'Firebase'],
    description: 'A secure patient management system with appointment scheduling and medical record handling.'
  },
  {
    id: 5,
    title: 'Travel Blog & Booking',
    category: 'WordPress',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['WordPress', 'Custom Theme', 'Elementor'],
    description: 'A visually stunning travel blog with integrated booking capabilities and user reviews.'
  },
  {
    id: 6,
    title: 'Corporate Dashboard',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    description: 'A comprehensive analytics dashboard for business intelligence and performance monitoring.'
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
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our Portfolio</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Explore our recent projects and see how we've helped businesses achieve 
            their digital goals.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border-2 border-teal-600 text-teal-600 font-medium rounded-md hover:bg-teal-600 hover:text-white transition-colors duration-300"
          >
            View All Projects
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;