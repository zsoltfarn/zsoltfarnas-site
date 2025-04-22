import React from 'react';
import { Globe, Smartphone, PenTool, Code2, Database, Layers } from 'lucide-react';
import ServiceCard from './ServiceCard';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe size={36} className="text" />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies focused on performance, scalability, and user experience.',
    },
    {
      icon: <Code2 size={36} className="text" />,
      title: 'WordPress Development',
      description: 'Professional WordPress websites with custom themes, plugins, and optimizations for speed and security.',
    },
    {
      icon: <Smartphone size={36} className="text" />,
      title: 'Responsive Design',
      description: 'Mobile-first websites that provide seamless experiences across all devices and screen sizes.',
    },
    {
      icon: <Database size={36} className="text" />,
      title: 'E-commerce Solutions',
      description: 'Online stores with secure payment processing, inventory management, and optimized checkout flows.',
    },
    {
      icon: <PenTool size={36} className="text" />,
      title: 'UI/UX Design',
      description: 'User-centered design processes that create intuitive, engaging, and visually appealing interfaces.',
    },
    {
      icon: <Layers size={36} className="text" />,
      title: 'Website Maintenance',
      description: 'Ongoing support, updates, and optimizations to keep your website secure and performing at its best.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <div className="services-underline"></div>
          <p className="services-description">
            We offer a comprehensive range of web development and WordPress services 
            to help your business succeed online.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;