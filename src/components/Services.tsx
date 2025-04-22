import React from 'react';
import { Globe, Smartphone, PenTool, Code2, Database, Layers } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe size={36} className="text-teal-500" />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies focused on performance, scalability, and user experience.',
    },
    {
      icon: <Code2 size={36} className="text-teal-500" />,
      title: 'WordPress Development',
      description: 'Professional WordPress websites with custom themes, plugins, and optimizations for speed and security.',
    },
    {
      icon: <Smartphone size={36} className="text-teal-500" />,
      title: 'Responsive Design',
      description: 'Mobile-first websites that provide seamless experiences across all devices and screen sizes.',
    },
    {
      icon: <Database size={36} className="text-teal-500" />,
      title: 'E-commerce Solutions',
      description: 'Online stores with secure payment processing, inventory management, and optimized checkout flows.',
    },
    {
      icon: <PenTool size={36} className="text-teal-500" />,
      title: 'UI/UX Design',
      description: 'User-centered design processes that create intuitive, engaging, and visually appealing interfaces.',
    },
    {
      icon: <Layers size={36} className="text-teal-500" />,
      title: 'Website Maintenance',
      description: 'Ongoing support, updates, and optimizations to keep your website secure and performing at its best.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our Services</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We offer a comprehensive range of web development and WordPress services 
            to help your business succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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