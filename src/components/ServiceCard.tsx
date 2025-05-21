import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const { t } = useTranslation();
  return (
    <div className="service-card">
      <div className="service-card-bg" />
      
      <div className="service-card-icon">{icon}</div>
      
      <h3 className="service-card-title">{title}</h3>
      
      <p className="service-card-desc">{description}</p>
      
      <button className="service-card-btn">
        {t('services.learn-more')}
        <ArrowRight size={16} className="service-card-arrow" />
      </button>
    </div>
  );
};

export default ServiceCard;