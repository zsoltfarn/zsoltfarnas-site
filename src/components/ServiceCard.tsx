import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden">
      <div className="absolute top-0 right-0 h-32 w-32 bg-teal-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="mb-5">{icon}</div>
      
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      
      <p className="text-gray-600 mb-5">{description}</p>
      
      <button className="flex items-center font-medium text-teal-600 hover:text-teal-700 transition-colors duration-300">
        Learn More
        <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all duration-300" />
      </button>
    </div>
  );
};

export default ServiceCard;